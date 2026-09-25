export interface GithubInfo {
  repoUrl: string;
  releaseUrl: string;
  /** Direct asset download when one exists, else falls back to the releases page. */
  downloadUrl: string;
  isDirectDownload: boolean;
  version: string | null;
  stars: number | null;
}

const HEADERS = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'ory-website-build',
};

function pickAsset(assets: Array<{ name: string; browser_download_url: string }> | undefined) {
  if (!assets || assets.length === 0) return null;
  const apk = assets.find((a) => a.name.toLowerCase().endsWith('.apk'));
  return apk ?? assets[0];
}

export async function fetchGithubInfo(owner: string, repo: string): Promise<GithubInfo> {
  const repoUrl = `https://github.com/${owner}/${repo}`;
  const releaseUrl = `${repoUrl}/releases`;

  try {
    const [repoRes, releaseRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers: HEADERS }),
      fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, { headers: HEADERS }),
    ]);

    const stars = repoRes.ok ? (await repoRes.json()).stargazers_count : null;
    const release = releaseRes.ok ? await releaseRes.json() : null;
    const asset = pickAsset(release?.assets);

    return {
      repoUrl,
      releaseUrl: release?.html_url ?? releaseUrl,
      downloadUrl: asset?.browser_download_url ?? release?.html_url ?? releaseUrl,
      isDirectDownload: Boolean(asset),
      version: release?.tag_name ?? null,
      stars: typeof stars === 'number' ? stars : null,
    };
  } catch {
    return { repoUrl, releaseUrl, downloadUrl: releaseUrl, isDirectDownload: false, version: null, stars: null };
  }
}

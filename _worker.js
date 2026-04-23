export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const ua = request.headers.get('User-Agent') || '';
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    if (isMobile && (url.pathname === '/' || url.pathname === '/index.html')) {
      const mobileUrl = new URL(url);
      mobileUrl.pathname = '/mobile/index.html';
      return env.ASSETS.fetch(mobileUrl.toString());
    }

    return env.ASSETS.fetch(request);
  }
}

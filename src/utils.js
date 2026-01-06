// utils.js
export function createPageUrl(pageName) {
  const pageRoutes = {
    Home: '/',
    About: '/about',
    FAQ: '/faq',
    Contact: '/contact',
    Privacy: '/privacy', // optional
    GetStarted: '/get-started', // optional if you add it
    Schedule: '/schedule',      // optional if you add it
  };

  return pageRoutes[pageName] || '/';
}

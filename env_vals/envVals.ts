const subscriptionKey = process.env.AeonOcpApimSubscriptionKey || '';
const siteId = process.env.SITE_ID || '';
const bannerId = process.env.BANNER_ID || '';
const method = process.env.METHOD || 'GET';

export { subscriptionKey, siteId, bannerId, method}
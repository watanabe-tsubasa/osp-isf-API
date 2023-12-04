const subscriptionKey = process.env.AeonOcpApimSubscriptionKey || '';
const siteId = process.env.SITE_ID || '';
const bannerId = process.env.BANNER_ID || '';
const method = process.env.METHOD || 'GET';
const endPoint = process.env.API_END_POINT || '';

export { subscriptionKey, siteId, bannerId, method, endPoint}
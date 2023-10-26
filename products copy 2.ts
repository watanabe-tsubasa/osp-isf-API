const baseUrl = 'https://apim2-dev-api.azure-api.net/payloads/v3/products';

const subscriptionKey = process.env.AeonOcpApimSubscriptionKey || ''

const res = await fetch(`${baseUrl}/`, {
  method: 'GET',
  // body: JSON.stringify({
  // title: 'foo',
  // body: 'bar',
  // userId: 1,
  // }),
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    'Ocp-Apim-Subscription-Key': subscriptionKey,
    // 'RequestId': requestId
  },
});

const json = await res.json();
const header = res.headers;
const status = res.status;

console.log(json, header, status);

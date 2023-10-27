const subscriptionKey = process.env.AeonOcpApimSubscriptionKey || '';
const siteId = process.env.SITE_ID || '';

const baseUrl = `https://apim2-dev-api.azure-api.net/payloads/v3/products/14987072068943/sites/${siteId}`;

const res = await fetch(`${baseUrl}/`, {
  method: process.env.METHOD ||'GET',
  // body: JSON.stringify([{
  //   from: '2021-12-01T00:00:00Z',
  // }]),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Ocp-Apim-Subscription-Key': subscriptionKey,
    // 'RequestId': requestId
  },
});

const header = res.headers;
const status = res.status;
const resType = header.get('content-type')

if (resType === 'application/json') {
  const json = await res.json();
  console.log(json);
} else if (resType === "text/plain; charset=utf-8") {
  const text = await res.text();
  console.log(text);
}

console.log(header, status);

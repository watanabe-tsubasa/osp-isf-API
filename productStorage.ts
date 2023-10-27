import { fetchOptions } from "./base_fetcher/baseFetchOptions";
import { method, subscriptionKey } from "./env_vals/envVals";


const baseUrl = `https://apim2-dev-api.azure-api.net/payloads/v3/products`;

if (method !== 'GET') {
  fetchOptions.body = JSON.stringify([{
    from: '2021-12-01T00:00:00Z',
  }]);
}

const res = await fetch(`${baseUrl}/14987072068943`, {
  method: process.env.METHOD ||'GET',
  // body: JSON.stringify({
  // title: 'foo',
  // body: 'bar',
  // userId: 1,
  // }),
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


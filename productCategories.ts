import { fetchOptions } from "./base_fetcher/baseFetchOptions";
import { bannerId, method } from "./env_vals/envVals";

const productId = '14901360354167';

const baseUrl = `https://apim2-dev-api.azure-api.net/payloads/v3/${bannerId}/product-categories/root`;

if (method !== 'GET') {
  fetchOptions.body = JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
}

const res = await fetch(`${baseUrl}?retailerRegionId=default-region`, fetchOptions);

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


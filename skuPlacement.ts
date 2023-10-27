import { fetchOptions } from "./base_fetcher/baseFetchOptions";
import { method } from "./env_vals/envVals";

const siteId = process.env.SITE_ID || '';

const baseUrl = `https://apim2-dev-api.azure-api.net/payloads/v1/sites/${siteId}/sku-placements/`;

if (method !== 'GET') {
  fetchOptions.body = JSON.stringify([{
    pickLocationId: 'testWatanabe',
    priority: 1,
    retailerSkuId: '14987072068943',
    skuPlacementId: 'ISF14987072068943'
  }]);
}

const res = await fetch(`${baseUrl}/`, fetchOptions);


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


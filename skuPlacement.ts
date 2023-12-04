import { fetchOptions } from "./base_fetcher/baseFetchOptions";
import { endPoint, method } from "./env_vals/envVals";
import { skuList } from "./skuList";

const siteId = process.env.SITE_ID || '';

const baseUrl = `${endPoint}/v1/sites/${siteId}/sku-placements/`;

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
  for (const productId of skuList) {
    console.log(productId);
    text.includes(productId) ? console.log('設定済み') : console.log('未設定');
  }
}

console.log(header, status);


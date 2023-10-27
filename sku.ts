import { fetchOptions } from "./base_fetcher/baseFetchOptions";
import { method, siteId, subscriptionKey } from "./env_vals/envVals";

const productId = '14987072068943';
const baseUrl = `https://apim2-dev-api.azure-api.net/payloads/v5/skus/${productId}/sites/${siteId}`;

if (method !== 'GET') {
  fetchOptions.body = JSON.stringify({
    placementPreferences: [],
    receivableZones: ["AMBIENT_DECANT_ZONE","AMBIENT_INVENTORY_MANAGEMENT_ZONE"],
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


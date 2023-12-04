import { fetchOptions } from "./base_fetcher/baseFetchOptions";
import { endPoint, method, siteId } from "./env_vals/envVals";
import { skuList } from "./skuList";

// const productId = '14987072068943';

for (const productId of skuList) {

  const baseUrl = `${endPoint}/v5/skus/${productId}/sites/${siteId}`;
  
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

}  

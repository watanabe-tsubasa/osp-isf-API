import { fetchOptions } from "./base_fetcher/baseFetchOptions";
import { bannerId, endPoint, method } from "./env_vals/envVals";
import { skuList } from "./skuList";

// const productId = '14901577075343';

for (const productId of skuList){

  const baseUrl = `${endPoint}/v3/${bannerId}/products/${productId}/price`;
  //https://api.sandbox.atmosphere.osp.tech/v3/{retailerBannerId}/products/{retailerProductId}/price
  
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

}  


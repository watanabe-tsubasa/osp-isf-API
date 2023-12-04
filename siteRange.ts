import { fetchOptions } from "./base_fetcher/baseFetchOptions";
import { endPoint, method, siteId } from "./env_vals/envVals";
import { skuList } from "./skuList";

// const productId = '10000045107891'

for (const productId of skuList) {
  
  const baseUrl = `${endPoint}/v3/products/${productId}/sites/${siteId}`;
  
  if (method !== 'GET') {
    fetchOptions.body = JSON.stringify([{
      from: '2021-12-01T00:00:00Z',
    }]);
  }
  
  const res = await fetch(`${baseUrl}/`, fetchOptions);
  
  const header = res.headers;
  const status = res.status;
  const resType = header.get('content-type')
  console.log(productId);
  if (resType === 'application/json') {
    const json = await res.json();
    console.log(json);
  } else if (resType === "text/plain; charset=utf-8") {
    const text = await res.text();
    console.log(text);
  }
  
  // console.log(header, status);
}


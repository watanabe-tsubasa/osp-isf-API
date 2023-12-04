import { fetchOptions } from "./base_fetcher/baseFetchOptions";
import { endPoint, method, siteId } from "./env_vals/envVals";

const baseUrl = `${endPoint}/v3/sites/${siteId}/pick-locations`;

if (method !== 'GET') {
  fetchOptions.body = JSON.stringify({
    displayName: 'madeByWatanabe',
    tags: [
      {"name":"zone","value":"ambient"},
      {"name":"sku","value":"14987072068943"},
      {"name":"bay","value":"B"},
      {"name":"aisle","value":"TE1"},
      {"name":"shelf","value":"P"},
      {"name":"sequence","value":"445"},
      {"name":"aisleSide","value":""},
      {"name":"position","value":"5"},
      {"name":"type","value":"NONE"}
    ],
  });
}

const res = await fetch(`${baseUrl}/testWatanabe`, fetchOptions);


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


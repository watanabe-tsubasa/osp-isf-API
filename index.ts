const baseUrl = 'https://api.sandbox.atmosphere.osp.tech';

const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY is not set");
}

const accessToken = process.env.ACCESS_TOKEN;
if (!accessToken) {
    throw new Error("ACCESS_TOKEN is not set");
}

const requestId = process.env.REQUEST_ID;
if (!requestId) {
    throw new Error("REQUEST_ID is not set");
}

const res = await fetch(`${baseUrl}/v3/products`, {
  method: 'GET',
  // body: JSON.stringify({
  // title: 'foo',
  // body: 'bar',
  // userId: 1,
  // }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'x-api-key': apiKey,
    'Authorization': `Bearer ${accessToken}`,
    'RequestId': requestId
  },
});

const json = await res.json();
const header = res.headers;
const status = res.status;

console.log(json, header, status);

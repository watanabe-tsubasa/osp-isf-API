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


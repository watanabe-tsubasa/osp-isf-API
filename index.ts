const baseUrl = 'https://api.sandbox.atmosphere.osp.tech';

const res = await fetch(`${baseUrl}/v3/products`, {
  method: 'GET',
  // body: JSON.stringify({
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  // }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'x-api-key': 'js;afjalfjsa;ofjoasja',
    'Authorization': 'Bearer sfjsl;afjasof:sjf:asj:f',
    'RequestId': '48379279470921'
  },
})
const json = await res.json();
const header = res.headers;
const status = res.status;
console.log(json, header, status);
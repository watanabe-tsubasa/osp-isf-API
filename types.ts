export type headerType= {
  "transfer-encoding": string;
  "content-type": "text/plain; charset=utf-8" | "application/json";
  "date": string;
  "request-context": string
} 


export interface FetchOptions {
  method: string;
  body?: string;
  headers: {
    'Content-type': string;
    'Ocp-Apim-Subscription-Key': string;
  };
}
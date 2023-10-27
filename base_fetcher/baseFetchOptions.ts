import { method, subscriptionKey } from "../env_vals/envVals";
import { FetchOptions } from "../types";

export let fetchOptions: FetchOptions = {
  method: method,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Ocp-Apim-Subscription-Key': subscriptionKey,
  }
};
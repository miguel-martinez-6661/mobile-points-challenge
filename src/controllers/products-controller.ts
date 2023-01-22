import { httpClient } from './http-client';

export const getProducts = async () => {
  const result = await httpClient.get('/products');
  return result.data;
};

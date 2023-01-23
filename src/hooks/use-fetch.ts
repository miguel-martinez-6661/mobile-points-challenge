import { useCallback, useEffect, useState } from 'react';

export function useFetch<T>(
  callback: (params?: any) => Promise<T>,
  params?: any,
) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const doFetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await callback(params);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [callback, params]);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return { data, isLoading, error };
}

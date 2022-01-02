import { request } from "graphql-request";
import type { Variables } from "graphql-request/dist/types";
import { useCallback, useState } from "react";

import { useUrlStore } from "../graphqlClient";

interface LazyResponse<R, V extends Variables> {
  trigger: (variables?: V, callbackOpts?: CallbackOpts<R>) => void;
  isLoading: boolean;
  data: R | null;
  error: Error | null;
}

interface CallbackOpts<R> {
  onSuccess?: (data: R) => void;
  onError?: (error: Error) => void;
}

export const useLazyQuery = <R, V extends Variables = Variables>(
  query: string,
  urlType?: string
): LazyResponse<R, V> => {
  const apiUrl = useUrlStore(
    useCallback(state => state.getUrl(urlType), [urlType])
  );

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({ data: null, error: null });

  const trigger = async (variables?: V, callbackOpts: CallbackOpts<R> = {}) => {
    setIsLoading(true);

    const { data, error } = await request(apiUrl, query, variables)
      .then(r => ({
        data: r,
        error: null,
      }))
      .catch(error => ({
        error,
        data: null,
      }));

    setResponse({ data, error });
    setIsLoading(false);

    if (data && callbackOpts.onSuccess) {
      callbackOpts.onSuccess(data);
    }

    if (error && callbackOpts.onError) {
      callbackOpts.onError(error);
    }
  };

  return {
    data: response.data,
    error: response.error,
    trigger,
    isLoading,
  };
};

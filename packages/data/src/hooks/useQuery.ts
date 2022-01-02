import stringify from "fast-json-stable-stringify";
import { request } from "graphql-request";
import type { Variables } from "graphql-request/dist/types";
import { useCallback, useMemo } from "react";
import type { SWRConfiguration, SWRResponse } from "swr";
import useSWR from "swr";

import { useUrlStore } from "../graphqlClient";

export const useQuery = <R, V extends Variables = Variables>(
  query: string,
  variables?: V,
  options?: SWRConfiguration<R>,
  urlType?: string
): SWRResponse<R, Error> & {
  isLoading: boolean;
} => {
  const apiUrl = useUrlStore(
    useCallback(state => state.getUrl(urlType), [urlType])
  );
  const params = useMemo(() => stringify(variables), [variables]);

  const { data, error, mutate, isValidating, revalidate } = useSWR(
    () => (query ? [query, params] : null),
    () => request(apiUrl, query, variables),
    options
  );

  return {
    isValidating,
    revalidate,
    mutate,
    data,
    error,
    isLoading: !error && !data,
  };
};

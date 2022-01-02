import { useState } from "react";
import type { SWRResponse } from "swr";
import useSWR from "swr";

interface UseLazyPost<R, V> {
  trigger: (body: V) => void;
  response: SWRResponse<R, Error>;
  isLoading: boolean;
}
export const useLazyPost = <R, V>(url: string, options?): UseLazyPost<R, V> => {
  const response = useSWR(url, () => null, options);
  const [isLoading, setIsLoading] = useState(false);

  const trigger = async (body: V) => {
    setIsLoading(true);
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(e => ({ error: e }))
      .finally(() => setIsLoading(false));

    response.mutate(result, false);
  };

  return { trigger, response, isLoading };
};

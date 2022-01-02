import { useEffect, useState } from "react";

interface PreviewProps {
  title?: string;
  description?: string;
  image?: string;
  url: string;
}

interface PreviewReturnType {
  isLoading: boolean;
  data: PreviewProps;
  error: string;
}

export const useIdeationPreview = (link): PreviewReturnType => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PreviewProps>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://api.linkpreview.net", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        key: "cd5e84befdf69fe0cab7c1ef90991848",
        q: link,
      }),
    })
      .then(res => res.json())
      .catch(error => {
        setError(error);
        return null;
      })
      .then(response => {
        setData(response);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, data, error };
};

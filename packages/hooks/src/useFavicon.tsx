import { useEffect, useState } from "react";

export function useFavicon() {
  const usesDarkMode = useDarkMode();

  const [favicon, setFavicon] = useState("/favicon-dark-32.png");
  const [manifest, setManifest] = useState("/manifest.webmanifest-dark.json");

  useEffect(() => {
    if (!usesDarkMode) {
      setFavicon("/favicon-dark-32.png");
      setManifest("/manifest.webmanifest-dark.json");
    } else {
      setFavicon("/favicon-light-32.png");
      setManifest("/manifest.webmanifest-light.json");
    }
  }, [usesDarkMode]);
  return { manifest, favicon };
}

export function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState<boolean>();

  useEffect(() => {
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  return isDarkMode;
}

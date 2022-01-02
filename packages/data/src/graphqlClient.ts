import type { State } from "zustand";

import { createStore } from "@goldn/functions";

interface Urls {
  [url: string]: string;
}
interface UrlState extends State {
  urls: Urls;
  defaultUrl?: string;
  setUrls: (urls: Urls, defaultUrl: string) => void;
  getUrl: (type?: keyof Urls) => string;
}

export const useUrlStore = createStore<UrlState>((set, get) => ({
  urls: {},
  setUrls: (urls: Urls, defaultUrl: string) =>
    set(state => {
      state.urls = urls;
      state.defaultUrl = defaultUrl;
    }),
  getUrl: type => {
    const state = get();

    return state.urls[type || state.defaultUrl];
  },
}));

export const initUrls = (urls: Urls, defaultUrl: string) => {
  const { setUrls } = useUrlStore.getState();

  setUrls(urls, defaultUrl);
};

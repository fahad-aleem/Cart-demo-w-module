import { State } from "zustand";

import { createStore } from "@goldn/functions";

export interface UseUpdaterState extends State {
  isLoading: boolean;
  showUpdater: () => void;
  hideUpdater: () => void;
}

export const useUpdaterState = createStore<UseUpdaterState>(set => ({
  isLoading: false,
  showUpdater: () =>
    set(state => {
      state.isLoading = true;
    }),
  hideUpdater: () =>
    set(state => {
      state.isLoading = false;
    }),
}));

export const loadingSelector = (
  state: UseUpdaterState
): Pick<UseUpdaterState, "isLoading"> => ({
  isLoading: state.isLoading,
});

export const loadingMethodsSelector = (
  state: UseUpdaterState
): Pick<UseUpdaterState, "showUpdater" | "hideUpdater"> => ({
  showUpdater: state.showUpdater,
  hideUpdater: state.hideUpdater,
});

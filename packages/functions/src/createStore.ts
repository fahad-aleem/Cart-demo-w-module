import type { Draft } from "immer";
import immer from "immer";
import type { State, StateCreator } from "zustand";
import create from "zustand";
import { persist } from "zustand/middleware";

const immerProduce = <T extends State>(
  config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
): StateCreator<T> => (set, get, api) =>
  config(fn => set(immer(fn) as (state: T) => T), get, api);

export const createStore = <T extends State>(
  FN: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
) => create<T>(immerProduce(FN));

export const createPersistedStore = <T extends State>(
  FN: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>,
  persistConfig: {
    name: string;
    getStorage?: () => {
      getItem: (name: string) => string | Promise<string>;
      setItem: (name: string, value: string) => void | Promise<void>;
    };
    serialize?: (state: {
      state: T;
      version: number;
    }) => string | Promise<string>;
    deserialize?: (
      str: string
    ) => { state: T; version: number } | Promise<{ state: T; version: number }>;
    blacklist?: (keyof T)[];
    whitelist?: (keyof T)[];
    onRehydrateStorage?: (
      state: T
    ) => void | ((state?: T, error?: Error) => void);
    version?: number;
    migrate?: (persistedState: any, version: number) => T | Promise<T>;
  }
) => create<T>(persist(immerProduce(FN), persistConfig));

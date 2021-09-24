import { createContext, useContext } from "react";
import TestRecipeStore from "./testRecipeStore";

export const store = {
    testRecipeStore: new TestRecipeStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
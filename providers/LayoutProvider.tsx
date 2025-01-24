"use client";

import { ReactNode, useContext } from "react";
import { createContext } from "react";

interface LayoutContextData {
  dekstopImage: string;
}

const LayoutContext = createContext<LayoutContextData | undefined>(undefined);

function useLayoutContext(): LayoutContextData {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
}

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContext.Provider value={{ dekstopImage: "" }}>
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutProvider, useLayoutContext };

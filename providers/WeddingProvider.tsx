"use client";

import getWeddingBySlug from "@/api/getWeddingBySlug";
import { Wedding } from "@/interfaces";
import { useParams } from "next/navigation";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

interface WeddingContextData {
  data: Wedding | undefined;
}

const WeddingContext = createContext<WeddingContextData | undefined>(undefined);

function useWeddingContext(): WeddingContextData {
  const context = useContext(WeddingContext);

  if (!context) {
    throw new Error("useWeddingContext must be used within a WeddingProvider");
  }
  return context;
}

const WeddingProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Wedding | undefined>(undefined);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    getWeddingBySlug(slug)
      .then(({ data }) => (data ? setData(data) : null))
      .catch((error) => console.error(error));
  }, [slug]);

  return (
    <WeddingContext.Provider value={{ data }}>
      {children}
    </WeddingContext.Provider>
  );
};

export { WeddingProvider, useWeddingContext };

"use client";

import Valency from "@/components/theme/valency";
import { WeddingProvider } from "@/providers/WeddingProvider";

export default function Page() {
  return (
    <WeddingProvider>
      <Valency />
    </WeddingProvider>
  );
}

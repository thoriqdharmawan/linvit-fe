"use client";

import DekstopImage from "@/components/ui/DekstopImage";
import WeddingInvitation from "@/components/ui/WeddingInvitation";
import { LayoutProvider } from "@/providers/LayoutProvider";

export default function Page() {
  return (
    <LayoutProvider>
      <div className="flex h-dvh">
        <div className="hidden xs:block w-full relative">
          <DekstopImage />
        </div>
        <div className="w-full xs:max-w-[430px] h-dvh">
          <WeddingInvitation />
        </div>
      </div>
    </LayoutProvider>
  );
}

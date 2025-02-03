import type { Wedding } from "@/interfaces";
import Image from "next/image";

export default function PhotoHightlight({ data }: { data: Wedding }) {
  return (
    <div className="relative w-full h-[645px]">
      <Image src={data.photo_highlight_one} fill alt="hightlight" />
    </div>
  )
}

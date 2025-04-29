import Image from "next/image"
import type { Wedding } from "@/interfaces"

export default function PhotoHightlight({ data }: { data: Wedding }) {
  return (
    <div data-sal="slide-up" data-sal-duration="2000" className="relative h-[645px] w-full">
      <Image src={data.photo_highlight_one} fill alt="hightlight" />
    </div>
  )
}

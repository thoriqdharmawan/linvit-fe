import Image from "next/image"

export default function PhotoHightlight({ src }: { src: string }) {
  return (
    <div data-sal="slide-up" data-sal-duration="2000" className="relative h-[645px] w-full">
      <Image src={src} fill alt="hightlight" className="object-contain" />
    </div>
  )
}

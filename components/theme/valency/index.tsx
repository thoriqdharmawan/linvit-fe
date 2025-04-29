import dynamic from "next/dynamic"
import Image from "next/image"
import DekstopImage from "@/components/theme/valency/sections/DekstopImage"
import { useWeddingContext } from "@/providers/WeddingProvider"
import GiftAndStreaming from "./sections/GiftAndStreaming"
import GroomBridge from "./sections/GroomBride"
import OurLoveStory from "./sections/OurLoveStory"
import OurMoments from "./sections/OurMoments"
import PhotoHightlight from "./sections/PhotoHightlight"
import RSVP from "./sections/RSVP"
import VideoOpening from "./sections/VideoOpening"
import WeddingEvent from "./sections/WeddingEvent"
import "./styles/index.css"

const WeddingDate = dynamic(() => import("./sections/WeddingDate"), {
  ssr: false,
})

export default function Valency() {
  const { data } = useWeddingContext()

  return (
    <div data-sal="slide-up" className="flex h-dvh">
      <div className="relative hidden w-full xs:block">
        <DekstopImage />
      </div>
      <div className="relative h-dvh w-full xs:max-w-[430px]">
        {data && (
          <div className="h-dvh w-full overflow-y-auto">
            <VideoOpening data={data} />
            <WeddingDate data={data} />
            <GroomBridge data={data} />
            <PhotoHightlight data={data} />
            <WeddingEvent data={data} />
            <OurMoments data={data} />
            <GiftAndStreaming />
            <RSVP />
            <OurLoveStory />
          </div>
        )}

        <Image
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/bg-gif.gif"
          unoptimized
          className="-z-20 object-cover"
          fill
          alt="bg"
        />
      </div>
    </div>
  )
}

import Image from "next/image"
import DekstopImage from "@/components/theme/valency/sections/DekstopImage"
import { useWeddingContext } from "@/providers/WeddingProvider"
import GroomBridge from "./sections/GroomBride"
import PhotoHightlight from "./sections/PhotoHightlight"
import VideoOpening from "./sections/VideoOpening"
import WeddingDate from "./sections/WeddingDate"
import WeddingEvent from "./sections/WeddingEvent"
import "./styles/index.css"
import OurMoments from "./sections/OurMoments"
import GiftAndStreaming from "./sections/GiftAndStreaming"

export default function Valency() {
  const { data } = useWeddingContext()

  return (
    <div className="flex h-dvh">
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

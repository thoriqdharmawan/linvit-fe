import dynamic from "next/dynamic"
import Image from "next/image"
import BestWhises from "@/components/theme/valency/sections/BestWhises"
import DekstopImage from "@/components/theme/valency/sections/DekstopImage"
import Footer from "@/components/theme/valency/sections/Footer"
import SharingMemoriesAndCheckin from "@/components/theme/valency/sections/SharingMemoriesAndCheckin"
import ThankYou from "@/components/theme/valency/sections/ThankYou"
import WeddingDate from "@/components/theme/valency/sections/WeddingDate"
import { useAudio } from "@/hooks/useAudio"
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

const audioUrl =
  "https://zivora.s3.ap-southeast-2.amazonaws.com/music/wedding-music-1.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZ24IS4L6D74E2TDD%2F20250430%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T104721Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAPZa3MXfdfeJYTgHUz5UV76oCEUuNlX3EvsQzWFsD6rSAiBZTa6C55X3dEhpe4RnARahDTpzXtH2wlCXPNdcNju6GSrjAgik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDY3NjIwNjkyODYzNiIMynRaE%2FcPGwjOclyIKrcCBK%2FujfHWCi6GOCqKmOsA7C0CVKLCJhw3KY1YcHgP2VzBQ7xrqP1HoReJE2LxRsAxri0owB8344yEzv0aesV3vntlWWw2NtqQzXVtMeovByamCtw0ED1YYMnpMDxnkndzViVEOy26MU4MzdRkfNswo7tnvnrcMMxQegM9EuYMMDn3up1fTsAqSrBOOfqI%2BVmVdSZ1Tqm8zAcKTLvs32k9MQ8c4REbCRhWt4GsPfy%2FZkBZQtHF8t7134LxjXh7Q9N62AICbk7jp9VlkadTBER5m55WuImUp7SkzpYAghYW3c3aL18LV6ByTPJbTZK0Gwpdz7Q%2FO0e801oRrJ2drs%2FU94P9AitJyyzhgkwH7EHobSQkB7St798VSBbjxVoj076e7Njo01Ema66Gb8gv8nGrvBGE5l%2F3d2Ew9%2F3HwAY6rQLPkgRA2ZwmZOc7ABhQLvz4bWnYmjwF3TJViBC8rvPz3zbGmUfaghg3xlZxOvTGrABoOF%2BNa%2FqqSRMrt1Zvniphyed1B7IORA83Ur4bBkR5ZHTrzJ4HVdUsc9jXs92bIBV3Z5U00WCvnh%2BCUN4AWFcww0s3bymLWm%2BmdDuORnX0GNd9eAotvkHL5HPeB%2B6FUAbWa20QrIS0M9bBKVtJxSrUj0SXtMIecvojFioYyw4uOqgiFyB1e4QXWdTCgOlgVZS7ivdthUpt8Kw8fNnx5hw0MUaeBc2GoBA5yjkBCOHIdirxm1VNQ9FOoLTVKYnWO7DEzOmIBo%2F4MvAZcf80sen%2Fu%2FHM4RkkReJiW91mgrF6Ap2gixce5p3tSbeOCqUqeZQg%2FupbOMeZG%2BQsbkk2&X-Amz-Signature=ffcfca04f01e0c80c7ad4debeb43c4d9f2a41ae5da0f01bea8d52ec277924532&X-Amz-SignedHeaders=host&response-content-disposition=inline"

export default function Valency() {
  const { data } = useWeddingContext()

  const { play, pause, isPlaying } = useAudio(audioUrl)

  return (
    <div data-sal="slide-up" className="flex h-dvh">
      <div className="relative hidden w-full xs:block">
        <DekstopImage />
      </div>
      <div className="relative h-dvh w-full xs:max-w-[430px]">
        <button onClick={isPlaying ? pause : play}>{isPlaying ? "Pause Music" : "Play Music"}</button>

        {data && (
          <div className="h-dvh w-full overflow-y-auto">
            <VideoOpening data={data} />
            <WeddingDate data={data} />
            <GroomBridge data={data} />
            <PhotoHightlight src={data.photo_highlight_one} />
            <WeddingEvent data={data} />
            <OurMoments data={data} />
            <GiftAndStreaming />
            <RSVP />
            <OurLoveStory />
            <PhotoHightlight src={data.photo_highlight_two} />
            <SharingMemoriesAndCheckin data={data} />
            <BestWhises />
            <ThankYou data={data} />
            <Footer />
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

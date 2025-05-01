import { useState, useEffect } from "react"
import Image from "next/image"
import ExitFullscreenIcon from "@/components/icons/ExitFullscreenIcon"
import PauseIcon from "@/components/icons/PauseIcon"
import PlayIcon from "@/components/icons/PlayIcon"
import BestWhises from "@/components/theme/valency/sections/BestWhises"
import Cover from "@/components/theme/valency/sections/Cover"
import DekstopImage from "@/components/theme/valency/sections/DekstopImage"
import Footer from "@/components/theme/valency/sections/Footer"
import SharingMemoriesAndCheckin from "@/components/theme/valency/sections/SharingMemoriesAndCheckin"
import ThankYou from "@/components/theme/valency/sections/ThankYou"
import WeddingDate from "@/components/theme/valency/sections/WeddingDate"
import { useAudio } from "@/hooks/useAudio"
import useFullscreen from "@/hooks/useFullscreen"
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

const audioUrl = "https://zivora.s3.ap-southeast-2.amazonaws.com/musics/wedding-music-1.mp3"

export default function Valency() {
  const { data } = useWeddingContext()
  const { play, pause, isPlaying } = useAudio(audioUrl)

  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen()

  const [invitationOpened, setInvitationOpened] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (invitationOpened) {
      play()
    }
  }, [invitationOpened])

  const handleOpenInvitation = () => {
    enterFullscreen()
    setIsAnimating(true)
    setTimeout(() => {
      setInvitationOpened(true)
    }, 200)
  }

  return (
    <div data-sal="slide-up" className="flex h-dvh">
      <div className="xs:block relative hidden w-full">
        <DekstopImage />
      </div>

      <div className="xs:max-w-[430px] relative h-dvh w-full">
        {isFullscreen && (
          <button
            onClick={exitFullscreen}
            className="fixed right-20 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
          >
            <ExitFullscreenIcon />
          </button>
        )}

        {invitationOpened && (
          <button
            onClick={isPlaying ? pause : play}
            className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        )}

        {!invitationOpened && <Cover data={data} isAnimating={isAnimating} onOpenInvitation={handleOpenInvitation} />}

        {data && (
          <div className={`h-dvh w-full overflow-y-auto ${!invitationOpened ? "hidden" : ""}`}>
            <VideoOpening data={data} autoPlay={invitationOpened} />
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

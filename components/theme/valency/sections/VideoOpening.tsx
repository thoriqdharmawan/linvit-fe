import { useRef, useEffect } from "react"
import { Wedding } from "@/interfaces"
import { formatDate } from "@/utils"

interface VideoOpeningProps {
  data: Wedding
  autoPlay?: boolean
}

export default function VideoOpening({ data, autoPlay = false }: VideoOpeningProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [autoPlay])

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <video ref={videoRef} autoPlay={autoPlay} muted loop className="h-full w-full object-cover">
        <source src="/opening.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="animate-fade-infinite-in absolute px-20 text-center opacity-0">
        <p className="castoro-regular mb-4 text-gray-500">THE WEDDING OF</p>

        <div className="flex flex-col gap-3">
          <h2 className="castoro-regular text-primary text-3xl font-semibold">{data.groom_nickname} Dharmawan</h2>
          <p className="pinyon-script-regular text-8xl font-semibold text-gray-500">&</p>
          <h2 className="castoro-regular text-primary text-3xl font-semibold">{data.bride_nickname}tun Hasanah</h2>
        </div>

        <p
          className="castoro-regular mt-8 text-base text-gray-500"
          dangerouslySetInnerHTML={{ __html: formatDate(data.wedding_date) }}
        ></p>
      </div>
    </div>
  )
}

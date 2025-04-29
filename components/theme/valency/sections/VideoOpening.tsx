import { Wedding } from "@/interfaces"

export default function VideoOpening({ data }: { data: Wedding }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <video autoPlay muted loop className="h-full w-full object-cover">
        <source src="/opening.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute animate-fadeIn px-20 text-center opacity-0">
        <p className="castoro-regular mb-4 text-gray-500">THE WEDDING OF</p>

        <div className="flex flex-col gap-3">
          <h2 className="castoro-regular text-4xl font-semibold text-primary">{data.groom_nickname} Dharmawan</h2>
          <p className="pinyon-script-regular text-8xl font-semibold text-gray-500">&</p>
          <h2 className="castoro-regular text-4xl font-semibold text-primary">{data.bride_nickname}tun Hasanah</h2>
        </div>

        <p className="castoro-regular mt-8 text-base text-gray-500">{data.wedding_date}</p>
      </div>
    </div>
  )
}

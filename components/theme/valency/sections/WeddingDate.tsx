import dynamic from "next/dynamic"
import Image from "next/image"
import DateIcon from "@/components/icons/DateIcon"
import { Wedding } from "@/interfaces"

const Countdown = dynamic(() => import("@/components/theme/valency/sections/CountDown"), {
  ssr: false,
})

export default function WeddingDate({ data }: { data: Wedding }) {
  const createGoogleCalendarUrl = () => {
    const eventTitle = `Wedding of ${data.bride_name} & ${data.groom_name}`

    const weddingDate = new Date(data.wedding_date)

    const startDate = new Date(weddingDate)

    const endDate = new Date(startDate)
    endDate.setHours(startDate.getHours() + 3)

    const formatDateForGCal = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, "")
    }

    const startDateStr = formatDateForGCal(startDate)
    const endDateStr = formatDateForGCal(endDate)

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDateStr}/${endDateStr}&details=${encodeURIComponent(data.our_journey)}`
  }

  return (
    <div className="relative flex flex-col gap-4 overflow-clip px-5 py-24 text-center">
      <div className="bg-opacity-20 rounded-t-full bg-[#fef0e1d7] shadow-2xl">
        <div className="flex flex-col items-center px-7 pt-9 pb-2">
          <Image
            src="https://picsum.photos/id/255/200/300"
            height={300}
            width={200}
            alt="date"
            className="mb-8 rounded-[92px] border-8 border-[#f7ede2] shadow-2xl"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-easing="ease-in-out-quint"
          />

          <h2
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-easing="ease-in-out-quint"
            className="pinyon-script-regular text-primary mb-8 text-5xl font-semibold"
          >
            Our Journey
          </h2>

          <p
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-quint"
            className="castoro-regular mb-8 leading-8 text-gray-500"
          >
            {data.our_journey}
          </p>

          <Countdown date="2025-05-12T12:00:00" />

          <div
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="300"
            className="my-12 flex items-center justify-center"
          >
            <a
              href={createGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="castoro-regular from-secondary to-primary flex items-center justify-center gap-4 rounded-full border-0 bg-linear-to-r fill-white p-3 px-8 text-sm text-white"
            >
              <DateIcon />
              <p className="text-sm">SAVE THE DATE</p>
            </a>
          </div>
        </div>

        <Image
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/section.webp"
          height={320}
          width={420}
          alt="btm-img"
          className="w-full"
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="200"
          data-sal-easing="ease-in-out-quint"
        />
      </div>

      <Image
        src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/bg-pink.webp"
        fill
        alt="bg"
        className="absolute -z-10 object-cover"
      />
    </div>
  )
}

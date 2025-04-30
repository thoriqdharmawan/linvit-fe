import dynamic from "next/dynamic"
import Image from "next/image"
import { Wedding } from "@/interfaces"

const Countdown = dynamic(() => import("@/components/theme/valency/sections/CountDown"), {
  ssr: false,
})

export default function WeddingDate({ data }: { data: Wedding }) {
  return (
    <div className="relative flex flex-col gap-4 overflow-clip px-5 py-24 text-center">
      <div className="rounded-t-full bg-[#fef0e1d7] bg-opacity-20 shadow-2xl">
        <div className="flex flex-col items-center px-7 pb-2 pt-9">
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
            className="pinyon-script-regular mb-8 text-5xl font-semibold text-primary"
          >
            Our Journey
          </h2>

          <p
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-quint"
            className="castoro-regular mb-8 leading-8 text-body text-gray-500"
          >
            {data.our_journey}
          </p>

          <Countdown date="2025-05-12T12:00:00" />
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

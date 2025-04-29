import Image from "next/image"
import { useCountdown } from "@/hooks/useCountdown"
import { Wedding } from "@/interfaces"

const DateItem = ({ amount, label }: { amount: number; label: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="castoro-regular text-3xl font-thin text-primary">{amount}</h4>
      <p className="castoro-regular text-lg text-gray-500">{label}</p>
    </div>
  )
}

export default function WeddingDate({ data }: { data: Wedding }) {
  const { days, hours, minutes, seconds } = useCountdown(new Date("2025-05-12T12:00:00"))

  return (
    <div className="relative flex flex-col gap-4 overflow-clip px-5 py-24 text-center">
      <div className="rounded-t-full bg-[#fef0e1d7] bg-opacity-20 shadow-2xl">
        <div className="flex flex-col items-center px-7 pb-2 pt-9">
          <Image
            src="https://picsum.photos/id/255/200/300"
            height={300}
            width={200}
            alt="date"
            className="mb-8 rounded-[92px] border-2 border-white shadow-2xl"
          />

          <h2 className="pinyon-script-regular mb-8 text-5xl font-semibold text-primary">Our Journey</h2>

          <p className="castoro-regular mb-8 leading-8 text-body text-gray-500">{data.our_journey}</p>

          <div className="grid grid-cols-2 gap-12">
            <DateItem amount={days} label="Days" />
            <DateItem amount={hours} label="Hours" />
            <DateItem amount={minutes} label="Minutes" />
            <DateItem amount={seconds} label="Seconds" />
          </div>
        </div>

        <Image
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/section.webp"
          height={320}
          width={420}
          alt="btm-img"
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

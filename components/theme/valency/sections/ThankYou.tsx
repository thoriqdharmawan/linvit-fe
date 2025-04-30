import Image from "next/image"
import { Wedding } from "@/interfaces"

const ThankYou = ({ data }: { data: Wedding }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-5 pb-32 pt-24 text-center">
      <Image
        src={data.thanks_image}
        alt=""
        width={295}
        height={345}
        className="mb-4 rounded-full border-8 border-[#fff8f2] shadow-lg"
        data-sal="slide-up"
        data-sal-duration="2000"
        data-sal-easing="ease-in-out-quint"
      />

      <h3
        data-sal="slide-up"
        data-sal-duration="2000"
        data-sal-easing="ease-in-out-quint"
        className="castoro-regular mb-3 text-center text-xl font-semibold text-primary"
      >
        THANK YOU FOR YOUR PRESENCE
      </h3>
      <p
        data-sal="slide-up"
        data-sal-duration="2000"
        data-sal-easing="ease-in-out-quint"
        className="castoro-regular text-sm leading-8 text-body text-gray-500"
      >
        {data.thanks_message}
      </p>

      <p
        data-sal="slide-up"
        data-sal-duration="2000"
        data-sal-easing="ease-in-out-quint"
        className="pinyon-script-regular mt-8 text-4xl leading-8 text-gray-500 text-primary"
      >
        {data.bride_nickname} & {data.groom_nickname}
      </p>
    </div>
  )
}

export default ThankYou

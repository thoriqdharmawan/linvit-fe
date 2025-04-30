import { ReactNode } from "react"
import GiftIcon from "@/components/icons/GiftIcon"
import VideoIcon from "@/components/icons/VideoIcon"

interface CardProps {
  title: string
  desc: string
  label: string
  icon: ReactNode
}

const Card = ({ title, desc, label, icon }: CardProps) => {
  return (
    <div
      data-sal="slide-up"
      data-sal-duration="2000"
      data-sal-easing="ease-in-out-quint"
      className="mb-4 rounded-xl bg-[#fef0e1d7] px-4 py-12 text-center shadow-2xl"
    >
      <h3 className="castoro-regular mb-3 text-center text-xl font-semibold text-primary">{title}</h3>
      <p className="castoro-regular text-sm leading-8 text-body text-gray-500">{desc}</p>

      <div className="mt-4 flex items-center justify-center">
        <button className="castoro-regular flex items-center justify-center gap-2 rounded-full border-0 bg-gradient-to-r from-secondary to-primary p-3 text-sm text-white">
          {icon}

          <p className="text-sm">{label}</p>
        </button>
      </div>
    </div>
  )
}

export default function GiftAndStreaming() {
  return (
    <div className="relative flex flex-col gap-4 overflow-clip px-5 py-12 text-center">
      <Card
        title="WEDDING GIFT"
        desc="Your presence is a present in itself. But if you do wish to give us something else, please tap the button down below for further information:"
        label="WEDDING GIFT"
        icon={<GiftIcon />}
      />
      <Card
        title="LIVE STREAMING"
        desc="We invite those of you who cannot attend in person to join our special moment through a virtual live streaming by clicking the following:"
        label="LIVE STREAMING"
        icon={<VideoIcon />}
      />
    </div>
  )
}

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
    <div className="text-center bg-[#fef0e1d7] px-4 py-12 rounded-xl mb-4 shadow-2xl">
      <h3 className="castoro-regular text-primary mb-3 text-center text-xl font-semibold">{title}</h3>
      <p className="castoro-regular text-body leading-8 text-sm">{desc}</p>

      <div className="flex items-center justify-center mt-4">
        <button
          className="castoro-regular flex items-center justify-center gap-2 rounded-full border-0 bg-gradient-to-r from-secondary to-primary p-3 text-sm text-white"
        >
          {icon}

          <p className="text-sm">{label}</p>
        </button>
      </div>
    </div>
  )
}

export default function GiftAndStreaming() {
  return (
    <div className="flex flex-col gap-4 px-5 py-12 text-center relative overflow-clip">
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
  );
}

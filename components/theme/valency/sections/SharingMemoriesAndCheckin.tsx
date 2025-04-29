import { ReactNode } from "react"
import ImagesIcon from "@/components/icons/ImagesIcon"
import QrcodeIcon from "@/components/icons/QrcodeIcon"

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
      data-sal-easing="ease-out-back"
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

export default function SharingMemoriesAndCheckin() {
  return (
    <div className="relative flex flex-col gap-4 overflow-clip px-5 py-12 text-center">
      <Card
        title="SHARING MEMORIES"
        desc="Please help us capture this special moment by uploading your photos during the event so that it becomes a beautiful memories for both couples by clicking the button below."
        label="SHARING MEMORIES"
        icon={<ImagesIcon />}
      />

      <Card
        title="QR CHECK-IN"
        desc="Show the QR code for checking in to the location for the officer to scan it because the data is integrated with the digital guestbook system. "
        label="VIEW QR CODE"
        icon={<QrcodeIcon />}
      />
    </div>
  )
}

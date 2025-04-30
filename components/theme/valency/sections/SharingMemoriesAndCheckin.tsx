import { ReactNode, useState } from "react"
import QRCode from "react-qr-code"
import Dialog from "@/components/common/Dialog"
import ArrowDownIcon from "@/components/icons/ArrowDownIcon"
import ImagesIcon from "@/components/icons/ImagesIcon"
import QrcodeIcon from "@/components/icons/QrcodeIcon"
import { useDownloadImage } from "@/hooks/useDownloadImage"
import { Wedding } from "@/interfaces"
import { formatDate } from "@/utils"

interface CardProps {
  title: string
  desc: string
  label: string
  icon: ReactNode
  onClick?: () => void
}

const Card = ({ title, desc, label, icon, onClick }: CardProps) => {
  return (
    <div
      data-sal="slide-up"
      data-sal-duration="2000"
      data-sal-easing="ease-in-out-quint"
      className="mb-4 rounded-xl bg-[#fef0e1d7] px-4 py-12 text-center shadow-2xl"
    >
      <h3 className="castoro-regular mb-3 text-center text-xl font-semibold text-primary">{title}</h3>
      <p className="castoro-regular text-sm leading-8 text-body text-gray-500">{desc}</p>

      {onClick && (
        <div onClick={onClick} className="mt-4 flex items-center justify-center">
          <button className="castoro-regular flex items-center justify-center gap-2 rounded-full border-0 bg-gradient-to-r from-secondary to-primary p-3 text-sm text-white">
            {icon}

            <p className="text-sm">{label}</p>
          </button>
        </div>
      )}
    </div>
  )
}

export default function SharingMemoriesAndCheckin({ data }: { data: Wedding }) {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const { elementRef, downloadImage } = useDownloadImage()

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
        onClick={() => setDialogOpen(true)}
      />

      <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <div ref={elementRef} className="bg-white pt-8 text-center">
          <h2 className="castoro-regular mb-4 text-xl font-semibold text-primary">QR CHECK-IN</h2>
          <p className="castoro-regular mb-4 text-sm leading-8 text-gray-500">
            Show the QR code for checking in to the location for the officer to scan it because the data is integrated
            with the digital guestbook system.
          </p>

          <div className="mb-2 rounded-lg bg-[#fef0e1d7]">
            <div className="px-4 py-6">
              <h3 className="castoro-regular mb-2 text-lg font-medium text-primary">THE WEDDING OF</h3>
              <div className="mb-8 text-sm text-gray-500">
                <p className="pinyon-script-regular text-5xl font-semibold text-primary">
                  {data.bride_nickname} & {data.groom_nickname}
                </p>
                <p
                  className="castoro-regular m-0"
                  dangerouslySetInnerHTML={{ __html: formatDate(data.wedding_date) }}
                ></p>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white p-3">
                  <QRCode value="Hello, World!" size={128} />
                </div>
              </div>
              <p className="castoro-regular mt-3 text-gray-500">Thoriq Dharmawan</p>
            </div>

            <div className="border-t border-dashed border-gray-300 py-2">
              <p className="castoro-regular text-xs text-gray-400">www.zivora.com</p>
            </div>
          </div>

          <p className="castoro-regular mb-2 text-xs leading-8 text-gray-500">
            Scan the QR code above to check in at the event location.
          </p>
        </div>

        <div className="flex w-full justify-center pb-8">
          <button
            onClick={() => downloadImage("qr-check-in.png")}
            className="castoro-regular flex items-center justify-center gap-2 rounded-full border-0 bg-gradient-to-r from-secondary to-primary p-3 text-sm text-white"
          >
            <ArrowDownIcon />
            <p className="text-sm leading-3">Download E-Invitation</p>
          </button>
        </div>
      </Dialog>
    </div>
  )
}

import { Wedding } from "@/interfaces"

interface Props {
  data: Wedding | undefined
  isAnimating: boolean
  onOpenInvitation: () => void
}

const Cover = (props: Props) => {
  const { data, isAnimating, onOpenInvitation } = props

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 px-4 backdrop-blur-xs transition-transform duration-500 ease-in-out ${isAnimating ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mb-24 text-center">
        <h1 className="text-md castoro-regular mb-2 font-serif text-white">THE WEDDING OF</h1>
        {data && (
          <p className="pinyon-script-regular font-serif text-6xl text-white">
            {data.groom_nickname} & {data.bride_nickname}
          </p>
        )}
      </div>
      <div>
        <div className="castoro-regular mb-12 text-center text-white">
          <p>Dear,</p>
          <p>Fullan Antoni Jastin</p>
        </div>
        <button
          onClick={onOpenInvitation}
          className="castoro-regular from-secondary to-primary flex cursor-pointer items-center justify-center gap-4 rounded-full border-0 bg-linear-to-r fill-white p-3 px-8 text-sm text-white"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  )
}

export default Cover

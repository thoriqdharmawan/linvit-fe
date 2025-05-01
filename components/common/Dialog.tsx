import { useEffect, useState } from "react"
import CloseIcon from "@/components/icons/CloseIcon"

type DialogProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(isOpen)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
      setClosing(false)
    } else {
      setClosing(true)
      const timeout = setTimeout(() => {
        setShow(false)
        setClosing(false)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  if (!show) return null

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className={`relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl ${
          closing ? "animate-slide-down" : "animate-slide-up"
        }`}
      >
        {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}

        <div className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
          <CloseIcon />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Dialog

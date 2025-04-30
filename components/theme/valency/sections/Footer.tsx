import GlobeIcon from "@/components/icons/GlobeIcon"
import InstagramIcon from "@/components/icons/InstagramIcon"
import WhatsAppIcon from "@/components/icons/WhatsAppIcon"

const Footer = () => {
  return (
    <div className="castoro-regular flex flex-col gap-2 bg-[#fff8f2] p-8 text-center">
      <div className="flex items-center justify-center gap-4 fill-white">
        <div className="cursor-pointer rounded-full bg-primary p-2">
          <InstagramIcon />
        </div>
        <div className="cursor-pointer rounded-full bg-primary p-2">
          <WhatsAppIcon />
        </div>
        <div className="cursor-pointer rounded-full bg-primary p-2">
          <GlobeIcon />
        </div>
      </div>

      <a className="text-primary" href="https://www.zivora.com" target="_blank" rel="noopener noreferrer">
        www.zivora.com
      </a>
    </div>
  )
}

export default Footer

import Image from "next/image"
import type { Wedding } from "@/interfaces"
import { formatDate, getDay } from "@/utils"

interface Props {
  title: string
  date: string
  times: string
  location_name: string
  address: string
  lat: string
  lng: string
}

const Card = (props: Props) => {
  const { title, address, date, lat, lng, location_name, times } = props

  return (
    <div className="relative flex flex-col items-center justify-center overflow-clip rounded-3xl border-4 bg-[#fef0e1d7] shadow-2xl">
      <Image
        src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/section.webp"
        height={320}
        width={420}
        alt="btm-img"
        className="rotate-180"
      />

      <div className="px-6 py-12">
        <h2 className="pinyon-script-regular mb-6 text-5xl font-semibold text-body">{title}</h2>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="castoro-regular text-lg capitalize text-body">{getDay(date)}</h3>
            <p className="castoro-regular text-lg text-body" dangerouslySetInnerHTML={{ __html: formatDate(date) }} />
            <p className="castoro-regular text-lg text-body">{times}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 border-t border-body" />
            <svg className="size-7 fill-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" />
            </svg>
            <div className="w-14 border-t border-body" />
          </div>

          <div className="castoro-regular flex flex-col gap-4">
            <h3 className="leading-6">{location_name}</h3>
            <p className="text-sm leading-8 text-body">{address}</p>
          </div>

          <a
            href={`https://www.google.com/maps?q=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="castoro-regular flex items-center justify-center gap-2 rounded-full border-0 bg-gradient-to-r from-secondary to-primary p-3 text-sm text-white"
          >
            <svg className="size-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <p className="text-sm leading-3">VIEW LOCATION</p>
          </a>
        </div>
      </div>

      <Image
        src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/section.webp"
        height={320}
        width={420}
        alt="btm-img"
      />
    </div>
  )
}

export default function Akad({ data }: { data: Wedding }) {
  return (
    <div className="relative flex flex-col gap-4 overflow-clip px-4 py-20 text-center">
      <div className="mb-8">
        <h1 className="castoro-regular mb-6 text-3xl font-semibold text-body">WEDDING EVENT</h1>

        <p className="castoro-regular text-sm leading-8 text-body">
          By the grace of God, we are pleased to announce our wedding to you, our family, and our friends. We request
          the honor of your presence on our special day that will be held on:
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <Card
          title="Akad"
          address={data.akad_address}
          date={data.akad_date}
          lat={data.akad_lat}
          lng={data.akad_lng}
          location_name={data.akad_location_name}
          times={data.akad_time}
        />
        <Card
          title="Reception"
          address={data.reception_address}
          date={data.reception_date}
          lat={data.reception_lat}
          lng={data.reception_lng}
          location_name={data.reception_location_name}
          times={data.reception_time}
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

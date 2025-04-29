import Image from "next/image"
import BuildingIcon from "@/components/icons/BuildingIcon"
import LocationIcon from "@/components/icons/LocationIcon"
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
    <div
      data-sal="slide-up"
      data-sal-duration="2000"
      data-sal-easing="ease-out-back"
      className="relative flex flex-col items-center justify-center overflow-clip rounded-3xl border-4 bg-[#fef0e1d7] shadow-2xl"
    >
      <Image
        src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/section.webp"
        height={320}
        width={420}
        alt="btm-img"
        className="rotate-180"
      />

      <div className="px-6 py-12">
        <h2 className="pinyon-script-regular mb-6 text-5xl font-semibold text-primary">{title}</h2>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="castoro-regular text-lg capitalize text-body">{getDay(date)}</h3>
            <p
              className="castoro-regular text-lg text-gray-500"
              dangerouslySetInnerHTML={{ __html: formatDate(date) }}
            />
            <p className="castoro-regular text-lg text-gray-500">{times}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 border-t border-body" />
            <BuildingIcon />
            <div className="w-14 border-t border-body" />
          </div>

          <div className="castoro-regular flex flex-col gap-4">
            <h3 className="leading-6">{location_name}</h3>
            <p className="text-sm leading-8 text-gray-500">{address}</p>
          </div>

          <a
            href={`https://www.google.com/maps?q=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="castoro-regular flex items-center justify-center gap-2 rounded-full border-0 bg-gradient-to-r from-secondary to-primary p-3 text-sm text-white"
          >
            <LocationIcon />

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

export default function WeddingEvent({ data }: { data: Wedding }) {
  return (
    <div className="relative flex flex-col gap-4 overflow-clip px-4 py-20 text-center">
      <div data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-back" className="mb-8">
        <h1 className="castoro-regular mb-6 text-3xl font-semibold text-primary">WEDDING EVENT</h1>

        <p className="castoro-regular text-sm leading-8 text-gray-500">
          By the grace of God, we are pleased to announce our wedding to you, our family, and our friends. We request
          the honor of your presence on our special day that will be held on:
        </p>
      </div>

      <div className="flex flex-col gap-16">
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

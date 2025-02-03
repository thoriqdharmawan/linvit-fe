import type { Wedding } from "@/interfaces";
import { formatDate, getDay } from "@/utils";
import Image from "next/image";

export default function Akad({ data }: { data: Wedding }) {

  console.log("data: ", data)

  return (
    <div className="relative flex flex-col gap-4 overflow-clip px-8 py-20 text-center">
      <div className="mb-12">
        <h1 className="castoro-regular mb-6 text-3xl font-semibold text-body">
          WEDDING EVENT
        </h1>

        <p className="castoro-regular text-body text-sm">
          By the grace of God, we are pleased to announce our wedding to you,
          our family, and our friends. We request the honor of your presence on
          our special day that will be held on:
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-clip rounded-3xl border-4 bg-[#fef0e1d7] shadow-2xl">
        <Image
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/section.webp"
          height={320}
          width={420}
          alt="btm-img"
          className="rotate-180"
        />

        <div className="px-4 py-12">
          <h2 className="pinyon-script-regular mb-6 text-5xl font-semibold text-body">
            Akad
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="castoro-regular text-lg text-body capitalize">{getDay(data.akad_date)}</h3>
              <p className="castoro-regular text-lg text-body" dangerouslySetInnerHTML={{ __html: formatDate(data.akad_date) }}></p>
              <p className="castoro-regular text-lg text-body">{data.akad_time}</p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 border-t border-body" />
              <svg className="size-7 fill-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" /></svg>
              <div className="w-14 border-t border-body" />
            </div>

            <div className="flex flex-col gap-2 castoro-regular">
              <h3>{data.akad_location_name}</h3>
              <p>{data.akad_address}</p>
            </div>

            <button className="rounded-full bg-gradient-to-r from-secondary to-primary p-3 border-0 text-white castoro-regular text-sm flex items-end justify-center gap-2">
              <svg className="size-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
              <p className="text-sm">VIEW LOCATION</p>
            </button>
          </div>
        </div>

        <Image
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/section.webp"
          height={320}
          width={420}
          alt="btm-img"
        />
      </div>

      <Image
        src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/bg-pink.webp"
        fill
        alt="bg"
        className="absolute -z-10 object-cover"
      />
    </div>
  );
}

import { Wedding } from "@/interfaces";
import Image from "next/image";

const DateItem = ({ amount, label }: { amount: number, label: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-3xl font-thin castoro-regular text-primary">{amount}</h4>
      <p className="castoro-regular text-lg text-gray-500">{label}</p>
    </div>
  )
}

export default function WeddingDate({ data }: { data: Wedding }) {
  return (
    <div className="flex flex-col gap-4 px-5 py-24 text-center relative overflow-clip">
      <div className="rounded-t-full  shadow-2xl bg-[#fef0e1d7] bg-opacity-20 ">
        <div className="pt-9 pb-2 px-7 flex flex-col items-center">
          <Image
            src="https://picsum.photos/id/255/200/300"
            height={300}
            width={200}
            alt="date"
            className="rounded-[92px] mb-8 border-2 border-white shadow-2xl"
          />

          <h2 className="text-5xl text-primary font-semibold mb-8 pinyon-script-regular">Our Journey</h2>

          <p className="mb-8 castoro-regular text-body leading-8 text-gray-500">{data.our_journey}</p>

          <div className="grid grid-cols-2 gap-12">
            <DateItem amount={3} label="Days" />
            <DateItem amount={6} label="Hours" />
            <DateItem amount={12} label="Minutes" />
            <DateItem amount={42} label="Seconds" />
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
        className="object-cover absolute -z-10"
      />
    </div>
  );
}



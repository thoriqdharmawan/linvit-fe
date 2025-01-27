import { Wedding } from "@/interfaces";
import Image from "next/image";
import WeddingDateBtm from "@/components/theme/valency/assets/wedding-date-bottom.webp";
import WeddingDateBg from "@/components/theme/valency/assets/wedding-date-bg.webp";

const DateItem = ({ amount, label }: { amount: number, label: string }) => {
  return (
    <div>
      <h4 className="text-3xl font-thin castoro-regular">{amount}</h4>
      <p className="castoro-regular text-lg">{label}</p>
    </div>
  )
}

// https://i.ibb.co.com/WVM4H2g/wedding-date-bg.webp

export default function WeddingDate({ data }: { data: Wedding }) {
  return (
    <div className="flex flex-col gap-4 px-10 py-12 text-center relative overflow-clip">
      <div className="rounded-t-full border-2 border-primary shadow-2xl shadow-primary bg-[#c0985d34] bg-opacity-20 ">
        <div className="pt-9 pb-2 px-7 flex flex-col items-center">
          <Image
            src="https://picsum.photos/id/255/200/300"
            height={300}
            width={200}
            alt="date"
            className="rounded-[92px] mb-8 border border-primary"
          />

          <h1 className="text-5xl text-primary font-semibold mb-8 pinyon-script-regular">Our Journey</h1>

          <p className="mb-8 castoro-regular text-body leading-8">{data.our_journey}</p>

          <div className="grid grid-cols-2 gap-12">
            <DateItem amount={3} label="Days" />
            <DateItem amount={6} label="Hours" />
            <DateItem amount={12} label="Minutes" />
            <DateItem amount={42} label="Seconds" />
          </div>
        </div>

        <Image
          src={WeddingDateBtm}
          height={320}
          alt="btm-img"
        />
      </div>

      <Image
        src={WeddingDateBg}
        fill
        alt="bg"
        className="object-cover absolute -z-10"
      />
    </div>
  );
}



import { Wedding } from "@/interfaces";
import Image from "next/image";

interface Photo {
  src: string;
  name: string;
  nickname: string;
  parent: string;
}

const Couple = (props: Photo) => {
  const { name, nickname, src, parent } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-8 flex h-80 w-60 overflow-hidden rounded-full border-8 border-[#fff8f2] shadow-2xl">
        <Image fill src={src} alt={name} className="object-cover" />
      </div>

      <h2 className="pinyon-script-regular mb-6 text-5xl font-semibold text-primary">
        {nickname}
      </h2>
      <h2 className="castoro-regular mb-2 text-xl text-gray-500">{name}</h2>
      <p className="castoro-regular text-gray-500">{parent}</p>
    </div>
  );
};

export default function GroomBridge({ data }: { data: Wedding }) {
  return (
    <div className="relative flex flex-col gap-4 overflow-clip px-4 py-20 text-center">
      <div className="flex flex-col items-center justify-center rounded-3xl bg-[#fef0e1d7] px-8 py-24 shadow-xl">
        <h1 className="castoro-regular mb-12 text-3xl font-semibold text-primary">
          GROOM & BRIDE
        </h1>

        <div className="flex flex-col gap-8">
          <Couple
            src={data.groom_photo}
            nickname={data.groom_nickname}
            name={data.groom_name}
            parent={`The Son of ${data.groom_parent}`}
          />
          <p className="pinyon-script-regular text-6xl font-semibold">&</p>
          <Couple
            src={data.bride_photo}
            nickname={data.bride_nickname}
            name={data.bride_name}
            parent={`The Daughter of ${data.bride_parent}`}
          />
        </div>
      </div>
    </div>
  );
}

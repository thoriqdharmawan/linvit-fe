import { Wedding } from "@/interfaces";
import Image from "next/image";

interface Photo { src: string, name: string, nickname: string, parent: string }

const Couple = (props: Photo) => {
  const { name, nickname, src, parent } = props

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-60 h-80 relative border-8 shadow-2xl border-[#fff8f2] rounded-full overflow-hidden mb-8 flex">
        <Image
          fill
          src={src}
          alt={name}
          className="object-cover"
        />
      </div>

      <h2 className="text-5xl font-semibold pinyon-script-regular mb-6">{nickname}</h2>
      <h2 className="text-xl castoro-regular mb-4">{name}</h2>
      <p className="castoro-regular">{parent}</p>
    </div>
  )
}

export default function GroomBridge({ data }: { data: Wedding }) {
  return (
    <div className="flex flex-col gap-4 px-8 py-12 text-center relative overflow-clip">
      <div className="rounded-3xl flex flex-col px-8 py-24 justify-center items-center shadow-2xl shadow-primary bg-[#fef0e1d7]">
        <h1 className="text-3xl font-semibold mb-12 castoro-regular text-body">GROOM & BRIDE</h1>

        <div className="flex flex-col gap-8">
          <Couple src={data.groom_photo} nickname={data.groom_nickname} name={data.groom_name} parent={`The Son of ${data.groom_parent}`} />
          <p className="text-6xl font-semibold pinyon-script-regular">&</p>
          <Couple src={data.bride_photo} nickname={data.bride_nickname} name={data.bride_name} parent={`The Daughter of ${data.bride_parent}`} />
        </div>

      </div>
    </div>
  );
}

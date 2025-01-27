import { Wedding } from "@/interfaces";
import Image from "next/image";

export default function GroomBridge({ data }: { data: Wedding }) {
  return (
    <div className="flex flex-col gap-4 px-6 py-12 text-center items-center">
      <h1 className="text-3xl font-semibold">GROOM & BRIDE</h1>

      <div>
        <Image
          src={data.groom_photo}
          height={300}
          width={200}
          alt={data.groom_name}
          className="rounded-md"
        />
        <h2 className="text-md font-semibold">{data.groom_name}</h2>
        <p>{data.groom_parent}</p>
      </div>
      <div>
        <Image
          src={data.bride_photo}
          height={300}
          width={200}
          alt={data.bride_name}
          className="rounded-md"
        />
        <h2 className="text-md font-semibold">{data.bride_name}</h2>
        <p>{data.bride_parent}</p>
      </div>

    </div>
  );
}

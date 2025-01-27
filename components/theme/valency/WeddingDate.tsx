import { Wedding } from "@/interfaces";
import Image from "next/image";

export default function WeddingDate({ data }: { data: Wedding }) {
  return (
    <div className="flex flex-col gap-4 px-12 py-12 text-center items-center">
      <div className="rounded-t-full flex flex-col items-center gap-3 border-2 border-primary p-4">
        <Image
          src="https://picsum.photos/300/400"
          height={300}
          width={200}
          alt="date"
          className="rounded-3xl"
        />

        <h1 className="text-3xl font-semibold">Our Journey</h1>

        <p>{data.our_journey}</p>
      </div>
    </div>
  );
}

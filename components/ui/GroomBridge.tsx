import Image from "next/image";

export default function GroomBridge() {
  return (
    <div className="flex flex-col gap-4 px-6 py-12 text-center items-center">
      <h1 className="text-3xl font-semibold">GROOM & BRIDE</h1>
      <Image
        src="https://picsum.photos/400"
        height={300}
        width={200}
        alt="date"
        className="rounded-md"
      />
      <h2 className="text-md font-semibold">
        Rangga Rangga Merdiana, S.I.Kom. w
      </h2>
      <p>The Son of Mr. Ir. Endang Jumhana & Mrs. Nengsih Maryati w</p>
    </div>
  );
}

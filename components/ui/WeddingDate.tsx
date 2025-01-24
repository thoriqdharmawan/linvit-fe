import Image from "next/image";

export default function WeddingDate() {
  return (
    <div className="flex flex-col gap-4 px-6 py-12 text-center items-center">
      <Image
        src="https://picsum.photos/300/400"
        height={300}
        width={200}
        alt="date"
        className="rounded-md"
      />

      <h1 className="text-3xl font-semibold">Our Journey</h1>

      <p>
        And of His signs is that He created for you from yourselves mates that
        you may find tranquility in them, and He placed between you affection
        and mercy. Indeed in that are signs for a people who give thought. (Q.S
        Ar-Rum: 21)
      </p>
    </div>
  );
}

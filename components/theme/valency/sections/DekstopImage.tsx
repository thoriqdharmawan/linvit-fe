"use client";

import Image from "next/image";

export default function DekstopImage() {
  return (
    <Image
      src="https://picsum.photos/1200/700"
      alt="dekstop image"
      className="object-cover"
      fill
    />
  );
}

import Image from "next/image";
import React from "react";

export default function Akad() {
  return (
    <div className="flex flex-col gap-4 overflow-clip px-8 py-12 text-center">
      <div className="flex flex-col items-center justify-center rounded-3xl bg-[#fef0e1d7] shadow-xl border-4 relative overflow-clip">
        <Image
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/section.webp"
          height={320}
          width={420}
          alt="btm-img"
          className="rotate-180"
        />

        <div className="py-12 px-4">
          <h1 className="castoro-regular mb-12 text-3xl font-semibold text-body">
            Akad
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem
            quod doloremque, tempora dolor sequi tempore accusantium architecto
            exercitationem aliquid? Cupiditate perspiciatis soluta illo veritatis
            repellendus in impedit eveniet similique!
          </p>
        </div>

        <Image
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/section.webp"
          height={320}
          width={420}
          alt="btm-img"
        />
      </div>
    </div>
  );
}

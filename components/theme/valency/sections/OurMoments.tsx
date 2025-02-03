import type { Wedding } from "@/interfaces";
import Image from "next/image";
import { ImageGallery } from "react-image-grid-gallery";

export default function OurMoments({ data }: { data: Wedding }) {
  return (
    <div className="py-10 flex flex-col gap-12">
      <div className="w-full overflow-hidden flex justify-center items-center">
        <iframe
          width="412"
          height="246"
          src="https://www.youtube.com/embed/fQ4VSZUVul0?si=5AL0n0PqfTJWIDvI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div>
        <h2 className="castoro-regular mb-12 text-center text-3xl font-semibold text-body">Our Moments</h2>

        <ImageGallery
          imagesInfoArray={data?.photos?.map((p) => ({ id: p.id, src: p.url, alt: p.name || '' })) || []}
          columnCount={2}
          columnWidth={160}
          gapSize={8}
          customStyles={{
            imageContainerStyle: {
              margin: 0
            }
          }}
        />
      </div>

      <Image
        src="https://zivora.s3.ap-southeast-2.amazonaws.com/themes/golden-serenade/bg-pink.webp"
        fill
        alt="bg"
        className="absolute -z-10 object-cover"
      />
    </div>
  )
}

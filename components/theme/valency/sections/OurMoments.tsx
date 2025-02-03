import Image from "next/image";
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    id: "1",
    alt: "text 1",
    src: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/3JEsPzxOXvtc3rNkuRsnyoV8ACEF5vdXzvdDL0UG.jpg",
  },
  {
    id: "2",
    alt: "Image2's alt text",
    src: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/f5V7ssSC088njEOM3pNTlA7CCevO9feeDk0b4ERw.jpg",
  },
  {
    id: "3",
    alt: "Image3's alt text",
    src: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/3JEsPzxOXvtc3rNkuRsnyoV8ACEF5vdXzvdDL0UG.jpg",
  },
  {
    id: "11",
    alt: "text 1",
    src: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/SpGkEttKFmtG0NyEY4rdELTMrXZX5oH8cbEiuevT.jpg",
  },
  {
    id: "21",
    alt: "Image2's alt text",
    src: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/3JEsPzxOXvtc3rNkuRsnyoV8ACEF5vdXzvdDL0UG.jpg",
  },
  {
    id: "31",
    alt: "Image3's alt text",
    src: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/3JEsPzxOXvtc3rNkuRsnyoV8ACEF5vdXzvdDL0UG.jpg",
  },
];

export default function OurMoments() {
  return (
    <div className="py-20 flex flex-col gap-12">
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
          imagesInfoArray={imagesArray}
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

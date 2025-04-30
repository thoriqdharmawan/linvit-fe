import { useState } from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import PhotoAlbum from "react-photo-album"
import "react-photo-album/styles.css"
import Lightbox from "yet-another-react-lightbox"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"
import { Wedding } from "@/interfaces"

interface WeddingContextData {
  data: Wedding | undefined
}

export default function OurMoments({ data }: WeddingContextData) {
  const [index, setIndex] = useState(-1)

  const photos = data?.photos.map((photo) => ({ key: `${photo.id}`, src: photo.url, width: 430, height: 600 })) ?? []

  return (
    <div className="flex flex-col gap-12 py-12">
      <div data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-back">
        <LiteYouTubeEmbed id="C1lbA0vel10" title="our wedding" />
      </div>

      <div>
        <h2
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-easing="ease-out-back"
          className="castoro-regular mb-12 text-center text-3xl font-semibold text-primary"
        >
          Our Moments
        </h2>
        <div>
          <PhotoAlbum
            layout="columns"
            photos={photos}
            columns={2}
            padding={0}
            spacing={3}
            onClick={({ index }) => setIndex(index)}
          />

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </div>
    </div>
  )
}

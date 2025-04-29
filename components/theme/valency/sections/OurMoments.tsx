import { useState } from 'react';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import PhotoAlbum from 'react-photo-album';
import 'react-photo-album/styles.css';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { Wedding } from '@/interfaces';

interface WeddingContextData {
  data: Wedding | undefined;
}

export default function OurMoments({ data }: WeddingContextData) {
  const [index, setIndex] = useState(-1);

  const photos = data?.photos.map((photo) => ({ key: `${photo.id}`, src: photo.url, width: 430, height: 600 })) ?? []

  return (
    <div className="py-12 flex flex-col gap-12">
      <div>
        <LiteYouTubeEmbed
          id="L2vS_050c-M"
          title="What's new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </div>

      <div>
        <h2 className="castoro-regular mb-12 text-center text-3xl font-semibold text-primary">Our Moments</h2>
        <div>
          <PhotoAlbum layout='columns' photos={photos} columns={2} padding={0} spacing={3} onClick={({ index }) => setIndex(index)} />

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

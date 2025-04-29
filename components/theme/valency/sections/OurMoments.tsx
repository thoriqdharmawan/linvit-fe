import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function OurMoments() {
  return (
    <div className="py-20 flex flex-col gap-12">
      <div>
        <LiteYouTubeEmbed
          id="L2vS_050c-M"
          title="What's new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </div>

      <div>
        <h2 className="castoro-regular mb-12 text-center text-3xl font-semibold text-body">Our Moments</h2>
        <div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos obcaecati minus explicabo est eligendi
            doloremque id beatae natus ad cumque soluta omnis voluptates, voluptas, blanditiis et? Deserunt, et facere.
          </p>
        </div>
      </div>

    </div>
  )
}

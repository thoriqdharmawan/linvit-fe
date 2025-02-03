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

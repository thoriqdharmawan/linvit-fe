export default function VideoOpening() {
  return (
    <div className="h-full w-full flex relative justify-center items-center">
      <video autoPlay muted loop className="object-cover h-full w-full">
        <source src="/opening.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute opacity-0 animate-fadeIn text-center px-20">
        <p className="castoro-regular mb-8 text-[#3e3e3e]">THE WEDDING OF</p>

        <div className="gap-3 flex flex-col">
          <h2 className="text-4xl font-semibold castoro-regular text-[#c0985d]">
            Thoriq
          </h2>
          <p className="text-4xl font-semibold pinyon-script-regular text-[#3e3e3e]">
            and
          </p>
          <h2 className="text-4xl font-semibold castoro-regular text-[#c0985d]">
            Nisa
          </h2>
        </div>

        <p className="castoro-regular text-base mt-8 text-[#3e3e3e]">
          05 . 05 . 25
        </p>
      </div>
    </div>
  );
}

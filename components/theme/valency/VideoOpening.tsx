import { Wedding } from "@/interfaces";

export default function VideoOpening({ data }: { data: Wedding }) {
  return (
    <div className="h-full w-full flex relative justify-center items-center">
      <video autoPlay muted loop className="object-cover h-full w-full">
        <source src="/opening.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div className="absolute opacity-0 animate-fadeIn text-center px-20"> */}
      <div className="absolute opacity-1 text-center px-20">
        <p className="castoro-regular mb-8 text-body">THE WEDDING OF</p>

        <div className="gap-3 flex flex-col">
          <h2 className="text-4xl font-semibold castoro-regular text-primary">
            {data.groom_nickname}
          </h2>
          <p className="text-4xl font-semibold pinyon-script-regular text-body">
            and
          </p>
          <h2 className="text-4xl font-semibold castoro-regular text-primary">
            {data.bride_nickname}
          </h2>
        </div>

        <p className="castoro-regular text-base mt-8 text-body">
          {data.wedding_date}
        </p>
      </div>
    </div>
  );
}

import DekstopImage from "@/components/theme/valency/DekstopImage";
import VideoOpening from "./VideoOpening";
import WeddingDate from "./WeddingDate";
import GroomBridge from "./GroomBride";
import { useWeddingContext } from "@/providers/WeddingProvider";
import "./style.css";

export default function Valency() {
  const { data } = useWeddingContext();

  return (
    <div className="flex h-dvh">
      <div className="hidden xs:block w-full relative">
        <DekstopImage />
      </div>
      <div className="w-full xs:max-w-[430px] h-dvh">
        {data && (
          <div className="w-full h-dvh overflow-y-auto">
            <VideoOpening data={data} />

            <WeddingDate data={data} />

            <GroomBridge data={data} />
          </div>
        )}
      </div>
    </div>
  );
}

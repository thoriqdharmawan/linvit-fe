"use client";

import GroomBridge from "../GroomBridge";
import VideoOpening from "../VideoOpening";
import WeddingDate from "../WeddingDate";

export default function WeddingInvitation() {
  return (
    <div className="w-full h-dvh overflow-y-auto">
      <VideoOpening />

      <WeddingDate />

      <GroomBridge />
    </div>
  );
}

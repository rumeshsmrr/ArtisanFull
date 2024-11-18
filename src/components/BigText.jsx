import React from "react";
import TextHoverEffect from "./TextHoverEffect";

export default function BigText() {
  return (
    <div className="relative flex w-full items-center h-fit bg-black">
      <TextHoverEffect text="Artisan" />
    </div>
  );
}

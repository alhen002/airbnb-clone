"use client";

import React from "react";
import Image from "next/image";

function Avatar() {
  return (
    <Image
      className={"rounded-full"}
      height={"30"}
      width={"30"}
      alt={"avatar"}
      src={"/images/placeholder.png"}
    />
  );
}

export default Avatar;

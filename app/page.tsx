"use client";
import { useState } from "react";
import Link from "next/link";

import React from "react";
import Jobs from "@/public/assets/jobs.jpeg";
import Image from "next/image";
import Button from "./components/Button/button";

export default function Home() {
  return (
    <div className="mx-10 mb-10">
      <div className=" bg-white">
        <div className="pt-20 pl-60 pb-20 bg-purple-600 relative">
          <div className="w-10/12 flex">
            <Image alt="darbas" src={Jobs} className="mr-14 w-[500px]" />
            <div className="w-[600px]">
              <p className="text-white font-google_font text-[50px] ">
                "Kažkada buvau bedarbis. Bet sugalvojau pradėt dirbti. Dėka šios
                nuostabios platformos įkūriau sėkmingą obuolių kompaniją"
              </p>
              <p className="text-white ">- STYVENAS DARBAS</p>
            </div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

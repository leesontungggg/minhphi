"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#3669B5] text-white py-12 px-4 font-manrope"
      id="lien-he"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        <div className="mb-8 md:mb-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              height={240}
              width={240}
              className="w-auto"
              priority
            />
          </Link>

          {/* <img src="/logo.png" alt="Logo" className="h-[240px] w-auto" /> */}
        </div>

        <div className="flex flex-col ml-auto leading-8 md:leading-16 text-[16px] md:text-[16px] md:text-[30px] font-manrope">
          CÔNG TY TNHH MTV MINH PHI <br />
          263 Trần Hưng Đạo, Khu phố Tây A, Phường Đông Hoà, Tp.HCM <br />
          <div>
            <a href="mailto:minhphiprinting@outlook.com">
              minhphiprinting@outlook.com
            </a>{" "}
            <br />
            <a href="tel:0908846050">0908 846 050</a> -{" "}
            <a href="tel:0909444030">0909 444 030</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

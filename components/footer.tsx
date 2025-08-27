"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3669B5] text-white py-12 px-4 font-manrope">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        <div className="mb-8 md:mb-0">
          <img src="/logo.png" alt="Logo" className="h-[240px] w-auto" />
        </div>

        <div className="flex flex-col ml-auto leading-16 text-[32px] font-manrope">
          CÔNG TY TNHH MTV MINH PHI <br />
          263 Trần Hưng Đạo, Khu phố Tây A, Phường Đông Hoà, Tp.HCM <br />
          minhphiprinting@outlook.com <br />
          0908 846 050 - 0909 444 030
        </div>
      </div>
    </footer>
  );
}

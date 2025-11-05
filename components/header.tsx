"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("/");

  console.log("Current Path:", currentPath);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fullPath =
      window.location.pathname + window.location.search + window.location.hash;

    console.log("Full Path:", fullPath);

    setCurrentPath(fullPath);

    return;
  }, []);

  return (
    <header className="bg-[#3669B5] text-white !font-oswald fixed z-10 w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-white font-normal text-2xl font-poller uppercase">
          <Link href="/" className="text-white  text-2xl uppercase">
            Minh Phi
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-8 w-8" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#3669B5] border-none px-4">
            <nav className="flex flex-col space-y-6 mt-12">
              <Link
                onClick={(e: React.MouseEvent) => {
                  setCurrentPath("/");
                  e.preventDefault();
                  if (typeof window === "undefined") return;
                  if (window.location.pathname === "/") {
                    const el = document.getElementById("trang-chu");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#trang-chu";
                  }
                }}
                href="/"
                className="text-white  text-lg uppercase"
              >
                Trang chủ
              </Link>
              <Link
                onClick={(e: React.MouseEvent) => {
                  setCurrentPath("/#dich-vu");
                  e.preventDefault();
                  if (typeof window === "undefined") return;
                  if (window.location.pathname === "/") {
                    const el = document.getElementById("dich-vu");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    window.location.href = "#dich-vu";
                  } else {
                    window.location.href = "/#dich-vu";
                  }
                }}
                href="#dich-vu"
                className="text-white  text-lg uppercase"
              >
                Dịch vụ
              </Link>
              <Link
                onClick={(e: React.MouseEvent) => {
                  setCurrentPath("/san-pham");
                  e.preventDefault();
                  if (typeof window === "undefined") return;
                  window.location.href = "/san-pham";
                }}
                href="/san-pham"
                className="text-white  text-lg uppercase"
              >
                Sản phẩm
              </Link>
              <Link
                onClick={(e: React.MouseEvent) => {
                  setCurrentPath("/#bao-gia");
                  e.preventDefault();
                  if (typeof window === "undefined") return;
                  if (window.location.pathname === "/") {
                    const el = document.getElementById("bao-gia");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    window.location.href = "#bao-gia";
                  } else {
                    window.location.href = "/#bao-gia";
                  }
                }}
                href="#bao-gia"
                className="text-white  text-lg uppercase"
              >
                Báo giá
              </Link>
              <Link
                onClick={(e: React.MouseEvent) => {
                  setCurrentPath("/goc-nghe-in");
                  e.preventDefault();
                  if (typeof window === "undefined") return;
                  window.location.href = "/goc-nghe-in";
                }}
                href="/goc-nghe-in"
                className="text-white text-lg uppercase"
              >
                Góc Nghề In
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <nav className="flex items-center space-x-8">
            <Link
              onClick={(e: React.MouseEvent) => {
                setCurrentPath("/");
                e.preventDefault();
                if (typeof window === "undefined") return;
                if (window.location.pathname === "/") {
                  const el = document.getElementById("trang-chu");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#trang-chu";
                }
              }}
              href="/"
              className={`${
                currentPath === "/" ? "text-[#80BFEF]" : "text-white"
              } text-sm font-medium uppercase px-4 py-5`}
            >
              Trang chủ
            </Link>
            <Link
              onClick={(e: React.MouseEvent) => {
                setCurrentPath("/#dich-vu");
                e.preventDefault();
                if (typeof window === "undefined") return;
                if (window.location.pathname === "/") {
                  const el = document.getElementById("dich-vu");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  window.location.href = "#dich-vu";
                } else {
                  window.location.href = "/#dich-vu";
                }
              }}
              href="#dich-vu"
              className={`${
                currentPath === "/#dich-vu" ? "text-[#80BFEF]" : "text-white"
              } text-sm font-medium uppercase px-4 py-5`}
            >
              Dịch vụ
            </Link>

            <Link
              onClick={(e: React.MouseEvent) => {
                setCurrentPath("/san-pham");
                e.preventDefault();
                if (typeof window === "undefined") return;
                window.location.href = "/san-pham";
              }}
              href="/san-pham"
              className={`${
                currentPath === "/san-pham" ? "text-[#80BFEF]" : "text-white"
              } text-sm font-medium uppercase px-4 py-5`}
            >
              Sản phẩm
            </Link>
            <Link
              onClick={(e: React.MouseEvent) => {
                setCurrentPath("/#bao-gia");
                e.preventDefault();
                if (typeof window === "undefined") return;
                if (window.location.pathname === "/") {
                  const el = document.getElementById("bao-gia");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  window.location.href = "#bao-gia";
                } else {
                  window.location.href = "/#bao-gia";
                }
              }}
              href="#bao-gia"
              className={`${
                currentPath === "/#bao-gia" ? "text-[#80BFEF]" : "text-white"
              } text-sm font-medium uppercase px-4 py-5`}
            >
              Báo giá
            </Link>

            <Link
              onClick={(e: React.MouseEvent) => {
                setCurrentPath("/goc-nghe-in");
                e.preventDefault();
                if (typeof window === "undefined") return;
                window.location.href = "/goc-nghe-in";
              }}
              href="/goc-nghe-in"
              className={`${
                currentPath === "/goc-nghe-in" ? "text-[#80BFEF]" : "text-white"
              } text-sm font-medium uppercase px-4 py-5`}
            >
              Góc Nghề In
            </Link>
            <Link
              href="#"
              className="bg-black  px-4 py-2 text-white text-xs font-medium uppercase ml-4"
            >
              Liên hệ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

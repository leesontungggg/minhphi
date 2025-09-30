"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export default function Navbar() {
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
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-gray-800">
            <nav className="flex flex-col space-y-6 mt-12">
              <Link href="/about" className="text-white  text-lg uppercase">
                Trang chủ
              </Link>
              <Link
                href="/programmes"
                className="text-white  text-lg uppercase"
              >
                Dịch vụ
              </Link>
              <Link href="/products" className="text-white  text-lg uppercase">
                Sản phẩm
              </Link>
              <Link href="#" className="text-white  text-lg uppercase">
                Báo giá
              </Link>
              <Link
                href="/goc-nghe-in"
                className="text-white text-lg uppercase"
              >
                Góc Nghề In
              </Link>
              <Link
                href="#"
                className="bg-black  px-4 py-2 text-white text-sm font-medium uppercase inline-block"
              >
                Liên hệ
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-white text-sm font-medium uppercase px-4 py-5"
            >
              Trang chủ
            </Link>
            <Link
              href="#"
              className="text-white text-sm font-medium uppercase px-4 py-5"
            >
              Dịch vụ
            </Link>

            <Link
              href="/products"
              className="text-white text-sm font-medium uppercase px-4 py-5"
            >
              Sản phẩm
            </Link>
            <Link
              href="#"
              className="text-white text-sm font-medium uppercase px-4 py-5"
            >
              Báo giá
            </Link>

            <Link
              href="goc-nghe-in"
              className="text-white text-sm font-medium uppercase px-4 py-5"
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

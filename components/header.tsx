"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="relative bg-[#3669B5] text-white !font-oswald">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-white font-bold text-2xl font-poller">
          Minh Phi
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
              <Link href="#" className="text-white  text-lg uppercase">
                Sản phẩm
              </Link>
              <Link href="#" className="text-white  text-lg uppercase">
                Báo giá
              </Link>
              <Link href="#" className="text-white text-lg uppercase">
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
          <nav className="flex items-center">
            <Link
              href="/about"
              className="text-white text-sm font-medium uppercase px-4 py-5"
            >
              Trang chủ
            </Link>
            <Link
              href="/programmes"
              className="text-white text-sm font-medium uppercase px-4 py-5"
            >
              Dịch vụ
            </Link>

            <Link
              href="#"
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
              href="#"
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

          {/* Search Button/Input */}
          <div className="relative ml-4">
            {isSearchOpen ? (
              <div className="flex items-center absolute right-0 top-0 bg-black bg-opacity-90 p-1 rounded">
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-b border-white text-white w-48 focus:outline-none h-8"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white h-8 w-8"
                  onClick={toggleSearch}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={toggleSearch}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

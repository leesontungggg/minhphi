/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Products() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-16 md:pt-20">
        <div className="h-[50vh] md:h-[70vh] bg-[#80BFEF]">
          <div className="container px-4 mx-auto w-full h-full flex items-end justify-start py-[100px] md:py-[200px] text-white uppercase font-xanh text-[32px] md:text-[64px]">
            <div className="md:w-[493px]">
              sản phẩm <br />
              <p className="text-[48px] md:text-[96px] text-end ml-auto">
                đã in ấn
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 mx-auto py-[80px] flex flex-col">
        <div className="uppercase text-[#3669B5] font-xanh text-[60px] md:text-[100px] border-b-[2px] border-solid border-b-[#3669B5]">
          Vé - Thiệp mời
        </div>
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/ve-thiep-moi-1.png"
              alt="ve-thiep-moi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/ve-thiep-moi-2.png"
              alt="ve-thiep-moi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/ve-thiep-moi-3.png"
              alt="ve-thiep-moi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className="mt-[40px] border-t-[1px]  border-solid " />
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/ve-thiep-moi-4.png"
              alt="ve-thiep-moi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/ve-thiep-moi-5.png"
              alt="ve-thiep-moi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/ve-thiep-moi-6.png"
              alt="ve-thiep-moi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className="mt-[40px] border-t-[1px]  border-solid " />
      </section>

      {/* Tem Nhãn */}
      <section className="container px-4 mx-auto py-[80px] flex flex-col">
        <div className="uppercase text-[#3669B5] font-xanh text-[60px] md:text-[100px] border-b-[2px] border-solid border-b-[#3669B5]">
          Tem Nhãn
        </div>
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/tem-nhan-1.png"
              alt="tem-nhan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/tem-nhan-2.png"
              alt="tem-nhan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/tem-nhan-3.png"
              alt="tem-nhan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="container px-4 mx-auto py-[80px] flex flex-col">
        <div className="uppercase text-[#3669B5] font-xanh text-[60px] md:text-[100px] border-b-[2px] border-solid border-b-[#3669B5]">
          Catalogue
        </div>
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/catalogue-1.jpg"
              alt="catalogue"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/catalogue-2.jpg"
              alt="catalogue"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/catalogue-3.jpg"
              alt="catalogue"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Khác */}

      <section className="container px-4 mx-auto py-[80px] flex flex-col">
        <div className="uppercase text-[#3669B5] font-xanh text-[60px] md:text-[100px] border-b-[2px] border-solid border-b-[#3669B5]">
          Khác
        </div>
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/other-1.png"
              alt="khac"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/other-2.png"
              alt="khac"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/other-3.png"
              alt="khac"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className="mt-[40px] border-t-[1px]  border-solid " />
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/other-4.png"
              alt="khac"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/other-5.png"
              alt="khac"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[480px] aspect-square bg-gray-600">
            <img
              src="/other-6.png"
              alt="khac"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className="mt-[40px] border-t-[1px]  border-solid " />
      </section>
    </div>
  );
}

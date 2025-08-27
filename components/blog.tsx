import React from "react";
import { ArrowRight } from "lucide-react";

export default function Product() {
  const products = [
    {
      id: 1,
      title: "những điều nên lưu ý trước khi in ấn",
      image: "/ve thiep moi.jpg",
      alt: "Vé thiệp mời với thiết kế màu xanh nhạt",
    },
    {
      id: 2,
      title: "in giá rẻ là tiết kiệm?",
      image: "/catalogue.jpg",
      alt: "Catalogue màu xanh dương",
    },
    {
      id: 3,
      title: "khi phân vân chọn nơi in ấn",
      image: "/tem nhan.jpg",
      alt: "Tem nhãn màu xanh lá",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-2">
        <h2 className="text-[100px] font-light text-[#3669B5] leading-tight font-xanh">
          Góc <br /> nghề in
        </h2>
        <a
          href="#"
          className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          See all <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="bg-gray-100 overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-[40px] font-normal uppercase font-oswald">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

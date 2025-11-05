import React from "react";
// import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 font-oswald md:h-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 h-full">
        <div className="mb-8 md:mb-0 md:w-2/5 h-full flex flex-col">
          <h2 className="text-[60px] md:text-[100px] font-light text-[#3669B5] leading-tight font-xanh">
            Về
            <br />
            Minh Phi
          </h2>
          {/* <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xs font-manrope mt-auto text-[20px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem
            ipsum dolor sit amet.
          </p> */}
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:w-3/5 relative">
          <div className="absolute right-4 top-0 flex items-center text-sm">
            {/* <a
              href="#"
              className="flex items-center hover:text-[#3669B5] font-manrope"
            >
              See all <ArrowRight className="ml-2 h-4 w-4" />
            </a> */}
          </div>

          <div className="flex flex-col">
            <h6 className="text-[20px] md:text-[36px]">
              LÀM IN NHƯ CHÍNH MÌNH ĐANG DÙNG
            </h6>
            <p className="text-[16px] md:text-[30px] font-light font-manrope mt-4">
              Minh Phi là đơn vị in ấn hoạt động tại TP. Dĩ An, Bình Dương từ
              năm 2023. Chúng tôi chuyên in offset và in kỹ thuật số với các sản
              phẩm như: tem nhãn – bao bì giấy – tờ rơi – danh thiếp – catalogue
              – brochure... đặc biệt là những sản phẩm số lượng ít nhưng yêu cầu
              chất lượng cao.
              <br />
              <br />
              Minh Phi nhận in cho mọi đối tượng khách hàng, từ cá nhân, shop
              nhỏ đến doanh nghiệp – luôn đảm bảo thành phẩm rõ nét, đóng gói
              gọn gàng và giao đúng hẹn.
            </p>
            <hr className="mt-[40px]" />
            <h6 className="text-[20px] md:text-[36px] mt-[45px] md:mt-[90px]">
              TRÁCH NHIỆM - RÕ RÀNG - LINH HOẠT
            </h6>
            <p className="text-[16px] md:text-[30px] font-light font-manrope mt-4">
              Luôn kiểm tra kỹ trước khi in
              <br />
              Góp ý trung thực nếu thấy điểm chưa ổn
              <br />
              Linh hoạt hỗ trợ đơn hàng gấp, số lượng ít
              <br />
              Báo giá rõ ràng, không phát sinh vô lý
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col">
              <div className="bg-gray-300 aspect-square w-full"></div>
              <h3 className="text-xl font-normal mt-4 uppercase text-[48px]">
                KÝ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES
              </h3>
              <div className="text-[#3669B5] font-bold text-[24px] mt-2 font-manrope">
                EXHIBITION
              </div>
              <div className="text-2xl font-bold text-[48px] mt-1 font-manrope">
                01.06
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-gray-300 aspect-square w-full"></div>
              <h3 className="text-xl font-normal mt-4 uppercase text-[48px]">
                KÝ ỨC CỦA CHÚNG TA - COLLECTIVE MEMORIES
              </h3>
              <div className="text-[#3669B5] font-bold text-[24px] mt-2 font-manrope">
                EXHIBITION
              </div>
              <div className="text-2xl font-bold text-[48px] mt-1 font-manrope">
                01.06
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

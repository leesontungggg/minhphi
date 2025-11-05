import React from "react";

export default function ServiceSection() {
  return (
    <div
      className="bg-[#DDE1E5] min-h-screen p-6 md:p-12 dark:bg-gray-800"
      id="dich-vu"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[60px] md:text-[100px] font-light text-[#3669B5] leading-tight font-xanh">
          Dịch Vụ
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[16px] md:text-[30px] font-manrope">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Offset Printing Section */}
            <div>
              <h2 className="text-[16px] md:text-[30px] font-bold mb-4 dark:text-gray-200 uppercase font-oswald">
                IN OFFSET
              </h2>
              <p className="text-gray-700 mb-4 dark:text-gray-300 text-[16px] md:text-[30px] font-[400] font-oswald">
                Số lượng lớn, giá tối ưu
              </p>

              <p className="mb-2 dark:text-gray-300 font-[300]">Phù hợp với:</p>
              <ul className="space-y-1 mb-4 list-disc list-inside">
                {[
                  "Tờ rơi quảng cáo, tem nhãn dán",
                  "Catalogue - brochure",
                  "Bao bì giấy - hộp carton",
                  "Lịch treo tường, sổ tay...",
                ].map((item, index) => (
                  <li key={index} className="mb-1">
                    {/* <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" /> */}
                    <span className="text-gray-700 dark:text-gray-300 font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mb-2 dark:text-gray-300 font-[300]">Ưu điểm:</p>
              <ul className="space-y-1 list-disc list-inside font-[300]">
                {[
                  "Chất lượng ổn định, màu chuẩn",
                  "Giá tốt khi in số lượng lớn",
                  "Thời gian sản xuất linh hoạt",
                ].map((item, index) => (
                  <li key={index} className="items-start">
                    {/* <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" /> */}
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Digital Printing Section */}
            <div className="md:border-l border-gray-300 md:pl-8 h-full dark:border-gray-600">
              <h2 className="text-[16px] md:text-[30px] font-bold uppercase mb-4 dark:text-gray-200 font-oswald">
                IN KỸ THUẬT SỐ
              </h2>
              <p className="text-gray-700 mb-4 dark:text-gray-300 text-[16px] md:text-[30px] font-oswald">
                Linh hoạt, nhanh chóng
              </p>

              <p className="mb-2 dark:text-gray-300 font-[300]">Phù hợp với:</p>
              <ul className="space-y-1 mb-4 list-disc list-inside font-[300]">
                {[
                  "In thử mẫu số lượng ít",
                  "Danh thiếp, thiệp cưới, thẻ cảm ơn",
                  "Nhãn dán - sticker theo yêu cầu",
                  "In gấp trong ngày (nếu file có sẵn)",
                ].map((item, index) => (
                  <li key={index} className="">
                    {/* <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" /> */}
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mb-2 dark:text-gray-300 font-[300]">Ưu điểm:</p>
              <ul className="space-y-1 list-disc list-inside font-[300]">
                {[
                  "Không yêu cầu số lượng tối thiểu",
                  "In siêu nhanh",
                  "Hình ảnh sắc nét, không lem hay bong trộc mực",
                ].map((item, index) => (
                  <li key={index} className="">
                    {/* <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" /> */}
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Label Printing Section */}
        <div className="text-[16px] md:text-[30px] mt-8 font-manrope">
          <h2 className="text-[16px] md:text-[30px] font-bold uppercase mb-2 dark:text-gray-200 font-oswald">
            IN TEM NHÃN, DECAL
          </h2>

          <p className="mb-2 dark:text-gray-300 font-[300] font-manrope">
            Phù hợp với:
          </p>
          <ul className="space-y-1 list-disc list-inside font-[300]">
            {[
              "Shop online, handmade, mỹ phẩm",
              "Tem niêm phong, mã QR, barcode",
              "Tem dữ liệu biến đổi theo Size, màu, truy nguồn gốc sản phẩm",
              "Dán hộp, túi giấy, bao bì sản phẩm",
            ].map((item, index) => (
              <li key={index} className="">
                {/* <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" /> */}
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Packaging Design Section */}
        <div className="text-[16px] md:text-[30px] mt-8 font-manrope">
          <h2 className="text-[16px] md:text-[30px] font-bold uppercase mb-4 dark:text-gray-200 font-oswald">
            THIẾT KẾ BAO BÌ VÀ ĐÓNG GÓI
          </h2>

          <p className="mb-2 dark:text-gray-300 font-[300] font-manrope">
            Phù hợp với:
          </p>
          <ul className="space-y-1 list-disc list-inside font-[300]">
            {[
              "Doanh nghiệp, cửa hàng cần đóng gói lại theo thương hiệu riêng (khách hàng có trách nhiệm đảm bảo nguồn gốc sản phẩm, thương hiệu cần in là hợp pháp)",
              "Đóng gói lại do bao bì hư hỏng trong quá trình vận chuyển hoặc không đạt chất lượng",
            ].map((item, index) => (
              <li key={index} className="">
                {/* <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" /> */}
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

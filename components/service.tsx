import React from "react";
import { Dot } from "lucide-react";

export default function ServiceSection() {
  return (
    <div className="bg-[#DDE1E5] min-h-screen p-6 md:p-12 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[100px] font-light text-[#3669B5] leading-tight font-xanh">
          Dịch Vụ
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[32px] font-manrope">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Offset Printing Section */}
            <div>
              <h2 className="text-3xl font-bold mb-1 dark:text-gray-200 uppercase">
                IN OFFSET
              </h2>
              <p className="text-gray-700 mb-4 dark:text-gray-300 text-3xl">
                Số lượng lớn, giá tối ưu
              </p>

              <p className="font-medium mb-2 dark:text-gray-300">
                Phù hợp với:
              </p>
              <ul className="space-y-1 mb-4">
                {[
                  "Tờ rơi quảng cáo, tem nhãn dán",
                  "Catalogue - brochure",
                  "Bao bì giấy - hộp carton",
                  "Lịch treo tường, sổ tay...",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-medium mb-2 dark:text-gray-300">Ưu điểm:</p>
              <ul className="space-y-1">
                {[
                  "Chất lượng ổn định, màu chuẩn",
                  "Giá tốt khi in số lượng lớn",
                  "Thời gian sản xuất linh hoạt",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Label Printing Section */}
            <div>
              <h2 className="text-3xl font-bold uppercase mb-1 dark:text-gray-200">
                IN TEM NHÃN, DECAL
              </h2>

              <p className="font-medium mb-2 dark:text-gray-300">
                Phù hợp với:
              </p>
              <ul className="space-y-1">
                {[
                  "Shop online, handmade, mỹ phẩm",
                  "Tem niêm phong, mã QR, barcode",
                  "Tem dữ liệu biến đổi theo Size, màu, truy nguồn gốc sản phẩm",
                  "Dán hộp, túi giấy, bao bì sản phẩm",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packaging Design Section */}
            <div>
              <h2 className="text-3xl font-bold uppercase mb-1 dark:text-gray-200">
                THIẾT KẾ BAO BÌ VÀ ĐÓNG GÓI
              </h2>

              <p className="font-medium mb-2 dark:text-gray-300">
                Phù hợp với:
              </p>
              <ul className="space-y-1">
                {[
                  "Doanh nghiệp, cửa hàng cần đóng gói lại theo thương hiệu riêng (khách hàng có trách đảm bảo nguồn gốc sản phẩm, thương hiệu cần in là hợp pháp)",
                  "Đóng gói lại do bao bì hư hỏng trong quá trình vận chuyển hoặc không đạt chất lượng",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" />
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
            <div className="border-l border-gray-300 pl-8 h-full dark:border-gray-600">
              <h2 className="text-3xl font-bold uppercase mb-1 dark:text-gray-200">
                IN KỸ THUẬT SỐ
              </h2>
              <p className="text-gray-700 mb-4 dark:text-gray-300 text-3xl">
                Linh hoạt, nhanh chóng
              </p>

              <p className="font-medium mb-2 dark:text-gray-300">
                Phù hợp với:
              </p>
              <ul className="space-y-1 mb-4">
                {[
                  "In thử mẫu số lượng ít",
                  "Danh thiếp, thiệp cưới, thẻ cảm ơn",
                  "Nhãn dán - sticker theo yêu cầu",
                  "In gấp trong ngày (nếu file có sẵn)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-medium mb-2 dark:text-gray-300">Ưu điểm:</p>
              <ul className="space-y-1">
                {[
                  "Không yêu cầu số lượng tối thiểu",
                  "In siêu nhanh",
                  "Hình ảnh sắc nét, không lem hay bong trộc mực",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Dot className="h-5 w-5 text-gray-700 flex-shrink-0 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

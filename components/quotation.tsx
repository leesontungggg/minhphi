import React from "react";

export default function QuotationPage() {
  return (
    <div
      className="bg-[#DDE1E5] min-h-screen p-6 md:p-12 dark:bg-gray-800"
      id="bao-gia"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[100px] text-[#3669B5] mb-6 font-xanh">Báo giá</h1>

        <div className="space-y-6 font-manrope text-[30px]">
          <div>
            <h2 className="text-[30px] font-bold text-gray-900 font-manrope mt-12">
              Quy trình làm việc đơn giản - rõ ràng
            </h2>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Bước 1: Nhận yêu cầu</h3>
            <p className="mt-2 text-gray-700">
              Bạn gửi nội dung cần in qua email, Zalo. Nếu cần giao gấp? Hãy nói
              rõ để chúng tôi hỗ trợ tốt nhất có thể.
            </p>
          </div>

          <div>
            <h3 className=" font-bold text-gray-900">
              Bước 2: Tư vấn & báo giá
            </h3>
            <p className="mt-2 text-gray-700">
              Chúng tôi tư vấn chất liệu - cách làm phù hợp nhất & gửi báo giá
              rõ ràng. Giá sản phẩm phụ thuộc vào:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700">
              <li>Loại sản phẩm (tờ rơi, tem nhãn, bao bì...)</li>
              <li>Kích thước, chất liệu, số lượng</li>
              <li>Thời gian hoàn thành mong muốn</li>
            </ul>
          </div>

          <div>
            <h3 className=" font-bold text-gray-900">Bước 3: Duyệt file in</h3>
            <p className="mt-2 text-gray-700">
              Bạn gửi file in hoặc thiết kế sẵn (PDF, AI...). Chúng tôi kiểm tra
              file, xử lý lại (nếu cần) và gửi bạn kiểm tra lại.
            </p>
          </div>

          <div>
            <h3 className=" font-bold text-gray-900">
              Bước 4: Sản xuất & giao hàng
            </h3>
            <p className="mt-2 text-gray-700">
              Sau khi xác nhận file và cọc, Minh Phi tiến hành sản xuất – kiểm
              tra – đóng gói – giao hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

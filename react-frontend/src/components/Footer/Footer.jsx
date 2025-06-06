import ghn from "../../assets/img/ghn.jpg";
import momo from "../../assets/img/momo.png";
import facebook from "../../assets/img/facebook.png";
import youtube from "../../assets/img/youtube.png";

function Footer() {
  return (
    <div className="bg-white px-16 text-gray-500 mt-4 shadow">
      <div className="bg-white py-8 flex text-sm gap-16 justify-between flex-wrap">
        <div>
          <div className="text-[16px] text-black mb-4">Hỗ trợ khách hàng</div>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Hướng dẫn đặt hàng</a>
            </li>
            <li>
              <a href="/">Hướng dẫn tạo tài khoản</a>
            </li>
            <li>
              <a href="/">Hướng dẫn đặt hàng</a>
            </li>
            <li>
              <a href="/">Phương thức vận chuyển</a>
            </li>
            <li>
              <a href="/">Chính sách kiểm hàng</a>
            </li>
            <li>
              <a href="/">Chính sách đổi trả</a>
            </li>
            <li>
              <a href="/">Gửi yêu cầu hỗ trợ</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[16px] text-black mb-4">Về TT E-Commerce</div>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Giới thiệu TT E-Commerce</a>
            </li>
            <li>
              <a href="/">Blog TT E-Commerce</a>
            </li>
            <li>
              <a href="/">Chính sách bảo mật thanh toán</a>
            </li>
            <li>
              <a href="/">Chính sách bảo mật thông tin cá nhân</a>
            </li>
            <li>
              <a href="/">Chính sách giải quyết khiếu nại</a>
            </li>
            <li>
              <a href="/">Điều khoản sử dụng</a>
            </li>
            <li>
              <a href="/">Điều kiện vận chuyển</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[16px] text-black mb-4">Hợp tác và liên kết</div>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Quy chế hoạt động Sàn GDTMĐT</a>
            </li>
            <li>
              <a href="/">Bán hàng cùng TT E-Commerce</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[16px] text-black mb-4">
            Phương thức thanh toán
          </div>
          <ul className="flex flex-col gap-2">
            <li>
              <img src={momo} alt="Momo Logo" width={26} height={26} />
            </li>
          </ul>
          <div className="text-[16px] text-black mb-4 mt-8">
            Dịch vụ giao hàng
          </div>
          <ul>
            <li>
              <img src={ghn} alt="" width={26} height={26} />
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[16px] text-black mb-4">Mạng xã hội</div>
          <ul className="flex justify-end gap-3 items-center">
            <li>
              <a href="/">
                <img src={youtube} alt="Youtube Logo" width={26} height={26} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={facebook} alt="Youtube Logo" width={26} height={26} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import Wishlist from "../common/Wishlist";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Link, NavLink } from "react-router";

function Navigation() {
  return (
    <nav className="px-16 py-6 flex justify-between gap-10 bg-white border-b border-gray-300">
      {/** flex-wrap */}
      <div className="flex gap-6 items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl text-[#050a30] flex items-center gap-4 font-bold"
        >
          <img src="/logo.svg" alt="Logo" width={50} height={50} />
          E-Commerce
        </Link>
      </div>
      <div className="flex flex-wrap items-center flex-1 gap-10">
        {/* Search Bar */}
        <div className="flex items-center flex-1">
          <input
            id="search"
            type="text"
            className="w-full border h-11 py-2 px-4 rounded text-sm text-gray-600 border-gray-400 focus:text-[#050a30] focus:border-[#050a30]"
            placeholder="Tìm kiếm"
          />
        </div>
        {/* Nav Items */}
        <ul className="flex gap-8">
          <li className="text-gray-600 hover:text-[#050a30] text-sm">
            <NavLink to="/">
              Trang chủ
              {/* Home */}
            </NavLink>
          </li>
          <li className="text-gray-600 hover:text-[#050a30] text-sm">
            <NavLink to="/">
              Liên hệ
              {/* Contact */}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        {/* Action Item - icons */}
        <ul className="flex items-center gap-8 flex-wrap">
          <li>
            <button>
              Yêu thích (1)
              {/* Wishlist (1) */}
              {/* <Wishlist /> */}
            </button>
          </li>
          <li>
            <Link to="/cart-item">
              <ShoppingCart />
            </Link>
          </li>
          <li>
            <button>
              <CircleUserRound />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

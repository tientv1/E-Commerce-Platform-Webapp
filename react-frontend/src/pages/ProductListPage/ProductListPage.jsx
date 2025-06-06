import { useMemo } from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import { SlidersHorizontal, Type } from "lucide-react";
import Categories from "../../Filters/Categories";

const categories = [
  {
    id: 1,
    name: "Điện thoại",
    code: "PHONE",
    desc: "Điện thoại - Máy tính bảng",
    types: [
      { id: 10, code: "IPHONE", name: "iPhone", type: "iphone" },
      { id: 11, code: "SAMSUNG", name: "Samsung", type: "samsung" },
    ],
  },
  {
    id: 2,
    name: "Laptop",
    code: "LAPTOP",
    desc: "Laptop",
    types: [
      { id: 20, code: "ACER", name: "Acer", type: "acer" },
      { id: 21, code: "ASUS", name: "Asus", type: "asus" },
    ],
  },
];

function ProductListPage({ categoryType }) {
  const categoryContent = useMemo(() => {
    return categories.find((category) => category.code === categoryType);
  }, [categoryType]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        {/* <Navigation /> */}
        <div className="flex gap-4 px-16 mt-4">
          <div className="w-[20%] rounded shadow bg-white p-4">
            {/* Filters */}
            <div className="flex justify-between text-gray-500 font-bold">
              <p className="text-md">Lọc sản phẩm</p>
              <SlidersHorizontal />
            </div>
            <div>
              <p className="text-sm font-bold">Danh mục</p>
              <Categories types={categoryContent.types} />
            </div>
          </div>
          <div className="w-[80%] rounded shadow bg-white p-4">
            {/* Product */}
            <p className="text-md font-bold">{categoryContent.desc}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductListPage;

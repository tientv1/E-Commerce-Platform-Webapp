import SectionHeading from "./SectionHeading";
import CategoryCard from "../Card/CategoryCard";
import Phone from "../../assets/img/phone.png";
import Laptop from "../../assets/img/laptop.png";
import Rtx5090 from "../../assets/img/rtx5090.png";
import MenShoes from "../../assets/img/man-shoes.png";
import WomenShoes from "../../assets/img/women-shoes.png";
import Book from "../../assets/img/book.png";
import TShirt from "../../assets/img/t-shirt.png";
import Carousel from "react-multi-carousel";
import { responsive } from "../../utils/Section.Constants";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const items = [
  { title: "Điện thoại", imagePath: Phone, url: "/phone" },
  { title: "Laptop - Máy vi tính", imagePath: Laptop },
  { title: "VGA - Card màn hình", imagePath: Rtx5090 },
  { title: "Giày - dép nam", imagePath: MenShoes },
  { title: "Giày - dép Nữ", imagePath: WomenShoes },
  { title: "Nhà sách", imagePath: Book },
  { title: "Thời trang Nam", imagePath: TShirt },
  { title: "Thời trang Nam", imagePath: TShirt },
];

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-[#050a30] text-white p-2 rounded-full z-10"
  >
    <ChevronLeft size={24} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-[#050a30] text-white p-2 rounded-full z-10"
  >
    <ChevronRight size={24} />
  </button>
);

function TodaySuggestion() {
  return (
    <div className="mx-16 mt-4 p-4 rounded bg-white shadow">
      <SectionHeading title="Danh mục" />
      <Carousel
        className="mt-4"
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisbile={false}
        itemClass={"react-slider-custom-item"}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {items &&
          items.map((item, index) => (
            <CategoryCard
              key={index}
              title={item.title}
              imagePath={item.imagePath}
              url={item.url}
            />
          ))}
      </Carousel>
    </div>
  );
}

export default TodaySuggestion;

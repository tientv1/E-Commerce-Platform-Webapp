import "./Shop.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navigation from "./components/Navigation/Navigation";
import TodaySuggestion from "./components/Sections/TodaySuggestion";
import ProductCard from "./components/Card/ProductCard";
import SectionHeading from "./components/Sections/SectionHeading";
import Footer from "./components/Footer/Footer";

const ProductItems = [
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
  {
    title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    price: "30.590.000",
    "sale-price": "34.990.000",
    image: "/images/phone.png",
  },
];

function Shop() {
  return (
    <>
      {/* <Navigation /> */}
      <HeroSection />
      <TodaySuggestion />
      <div className="p-4 mx-16 mt-4 bg-white shadow rounded">
        <SectionHeading title={"Gợi ý hôm nay"} />
        <div className="grid grid-cols-2 xl:grid-cols-6 2xl:grid-cols-8 mt-4 gap-4">
          {ProductItems &&
            ProductItems.map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                image={item.image}
                price={item.price}
                salePrice={item["sale-price"]}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;

import HeroImg from "../../assets/img/hero-img.png";
import Banner from "../../assets/img/banner-img.png";

function HeroSection() {
  return (
    <div className="px-16 bg-[#f5f5fa] pt-4">
      <div className="grid grid-cols-1 xl:grid-cols-7 grid-rows-4 gap-4 p-4 bg-white shadow rounded">
        <div className="col-span-8 2xl:col-span-5 xl:col-span-5  row-span-4">
          <div className="relative rounded overflow-hidden">
            <img
              className="object-center w-full h-full"
              src={HeroImg}
              alt="Ads"
            />
          </div>
        </div>
        <div className="col-span-8 2xl:col-span-2 xl:col-span-2 row-span-2 rounded overflow-hidden">
          <img className="object-center w-full h-full" src={Banner} alt="Ads" />
        </div>
        <div className="col-span-8 2xl:col-span-2 xl:col-span-2 row-span-2 rounded overflow-hidden">
          <img className="object-center w-full h-full" src={Banner} alt="Ads" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

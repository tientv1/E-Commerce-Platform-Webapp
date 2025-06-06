function ProductCard({ title, image, price, salePrice }) {
  return (
    <div className="card border rounded border-[#dddde3] overflow-hidden cursor-pointer hover:shadow-xl">
      <div className="image-card ">
        <img className="w-full h-full object-center" src={image} alt="" />
      </div>
      <div className="px-2 pb-2">
        <p className="break-words line-clamp-2 text-sm">{title}</p>
      </div>
      <div className="mx-2 flex items-center flex-wrap justify-between mb-2">
        <p className="text-red-500/90 font-bold">
          {price}
          <sup>đ</sup>
        </p>
        <p className="text-[12px] text-gray-400 line-through">
          {salePrice}
          <sup>đ</sup>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

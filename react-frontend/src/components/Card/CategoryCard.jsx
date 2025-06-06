import { NavLink } from "react-router";

function CategoryCard({ imagePath, title, url }) {
  return (
    <NavLink to={url}>
      <div className="flex flex-col hover:scale-90 cursor-pointer">
        <img
          className="object-center  w-[245px] h-[200px]"
          src={imagePath}
          alt="Category Image"
        />
        <p className="text-sm text-center mt-4 break-words mb-4">{title}</p>
      </div>
    </NavLink>
  );
}

export default CategoryCard;

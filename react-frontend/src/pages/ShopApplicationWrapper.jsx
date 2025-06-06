import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router";

function ShopApplicationWrapper() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default ShopApplicationWrapper;

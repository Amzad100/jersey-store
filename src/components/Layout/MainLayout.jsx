import { Outlet } from "react-router-dom";
import NavBar from "../Home/NavBar";
import Footer from "../Shared/Footer";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

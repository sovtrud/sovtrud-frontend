import Header from "@/widgets/Header";
import { Outlet } from "react-router";

function MainPage() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainPage;

import { Outlet } from "react-router-dom";
// import Navbar from "../components/Header/Navbar/Navbar";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto p-2">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
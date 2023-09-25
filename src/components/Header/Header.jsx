import { useLocation } from "react-router-dom";
import BannerWithNav from "./BannerWithNav/BannerWithNav";
import Navbar from "./Navbar/Navbar";


const Header = () => {
    const {pathname} = useLocation()
    console.log(pathname)

    return (
        <div>
            {pathname === '/' ? <BannerWithNav></BannerWithNav> : <Navbar></Navbar> }
        </div>
    );
};

export default Header;
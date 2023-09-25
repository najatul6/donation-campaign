import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const BannerWithNav = () => {
    return (
        <div>
            <div className="bg-banner-background hero bg-no-repeat bg-cover ">
                <div className="bg-[#58e7fa40]  w-full h-full">
                    <Navbar></Navbar>
                    <Banner></Banner>
                </div>
            </div>
        </div>
    );
};

export default BannerWithNav;
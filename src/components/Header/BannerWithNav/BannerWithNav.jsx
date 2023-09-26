import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const BannerWithNav = ({handlerSearchButton}) => {
    return (
        <div>
            <div className="bg-banner-background bg-blend-multiply bg-no-repeat bg-cover ">
                <div className="bg-[#ffffffdf]  w-full h-full">
                    <Navbar></Navbar>
                    <Banner handlerSearchButton={handlerSearchButton}></Banner>
                </div>
            </div>
        </div>
    );
};

export default BannerWithNav;
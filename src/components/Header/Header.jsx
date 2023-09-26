import { useLocation } from "react-router-dom";
import BannerWithNav from "./BannerWithNav/BannerWithNav";
import Navbar from "./Navbar/Navbar";
import PropTypes from 'prop-types';

const Header = ({handlerSearchButton}) => {
    const {pathname} = useLocation()

    return (
        <div>
            {pathname === '/' ? <BannerWithNav handlerSearchButton={handlerSearchButton}></BannerWithNav> : <Navbar></Navbar> }
        </div>
    );
};
Header.propTypes = {
    handlerSearchButton: PropTypes.func.isRequired,
}

export default Header;
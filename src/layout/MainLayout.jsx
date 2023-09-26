import { Outlet } from "react-router-dom";
// import Navbar from "../components/Header/Navbar/Navbar";
import Header from "../components/Header/Header";
import { useState } from "react";

const MainLayout = () => {
    const [searchText, setSearchText] = useState('')
    const handlerSearchButton = ()=>{
        const searchText = document.getElementById('search-box').value;
        setSearchText(searchText);
    }
    return (
        <div className="max-w-[1440px] mx-auto p-2">
            <Header handlerSearchButton={handlerSearchButton}></Header>
            <Outlet context={searchText}></Outlet>
        </div>
    );
};

export default MainLayout;
import { NavLink } from "react-router-dom";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const links = <>
    <li className="active:text-none">
        <NavLink
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : "text-black font-normal text-lg"
            }
            to="/">Home</NavLink>
    </li>
    <li><NavLink
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline md:ml-12 font-bold text-lg" : "text-black font-normal md:ml-12 text-lg"
        }
        to="/donation">Donation</NavLink></li>
    <li><NavLink
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline md:ml-12 font-bold text-lg" : "text-black font-normal md:ml-12 text-lg"
        }
        to="/statistics">Statistics</NavLink></li>
</>

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className="md:pt-8 md:px-2">
            <nav className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="md:hidden" onClick={() => setMenu(!menu)}>
                        {
                            menu === true ? <AiOutlineClose className="text-3xl"></AiOutlineClose> : <AiOutlineAlignLeft className="text-3xl"></AiOutlineAlignLeft>
                        }
                    </div>
                    <img className="h-[72px]" src="/Logo.png" alt="This is Donation campaign logo" />
                </div>
                <ul className={`md:flex absolute md:static md:bg-transparent duration-1000 px-2 py-2 rounded-lg ${menu ? 'top-14 left-3' : '-top-32'} bg-slate-500`}>
                    {links}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
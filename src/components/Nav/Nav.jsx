import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faBars } from '@fortawesome/free-solid-svg-icons';


export default function Nav() {

    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <nav className="bg-itemsLightBlue py-4">
            <div className="container mx-auto flex items-center justify-between relative">
                <p className="text-2xl max-md:ml-3">Your Logo</p>
                <FontAwesomeIcon icon={faBars} className="text-2xl block md:hidden max-md:mr-3" onClick={() => {setMenuOpened(!menuOpened)}} />
                <ul className={`flex max-md:flex-col max-md:absolute ${menuOpened ? "max-md:top-[130%]" : "max-md:top-[-1000%]"} transition-all duration-300 max-md:p-3 max-md:bg-itemsLightBlue max-md:w-full`}>
                    <li className="mx-3 max-md:my-3 text-gray-500 hover:text-black max-md:hover:pl-2 transition-all duration-300"><a href="" className="">Home</a></li>
                    <li className="mx-3 max-md:my-3 text-gray-500 hover:text-black max-md:hover:pl-2 transition-all duration-300"><a href="">Properties <span className="relative top-[-2px] ml-1"><FontAwesomeIcon icon={faSortDown} /></span></a></li>
                    <li className="mx-3 max-md:my-3 text-gray-500 hover:text-black max-md:hover:pl-2 transition-all duration-300"><a href="">Services</a></li>
                    <li className="mx-3 max-md:my-3 text-gray-500 hover:text-black max-md:hover:pl-2 transition-all duration-300"><a href="">Blog <span className="relative top-[-2px] ml-1"><FontAwesomeIcon icon={faSortDown} /></span></a></li>
                    <li className="mx-3 max-md:my-3 text-gray-500 hover:text-black max-md:hover:pl-2 transition-all duration-300"><a href="">About</a></li>
                    <li className="mx-3 max-md:my-3"><a href="" className="bg-mainColor text-white rounded-full px-4 py-2">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    )
}
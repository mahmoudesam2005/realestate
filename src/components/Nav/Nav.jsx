import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faBars } from '@fortawesome/free-solid-svg-icons';
import downArrow from "../../assets/icons/arrow_drop_down.svg";
import "./Nav.css";
import MainBtn from "../MainBtn/MainBtn";

const LINKS = [
    {path: "/", label: "Home", children: null},
    {path: "", label: "Products", children: [
        {path: "/", label: "Link1", children: null},
        {path: "/", label: "Link2", children: null},
        {path: "/", label: "Link3", children: null}
    ]},
    {path: "", label: "Services", children: null},
    {path: "", label: "Blog", children: [
        {path: "/", label: "Link1", children: null},
        {path: "/", label: "Link2", children: null},
        {path: "/", label: "Link3", children: null}
    ]},
    {path: "", label: "About", children: null},
]

export default function Nav() {

    const [menuOpened, setMenuOpened] = useState(false);

    const [isDropDown, setDropDown] = useState(["", false]);


    let idCounter = -1;

    function openMenu(event, menu) {
        event.preventDefault();
        setDropDown([menu, menu === isDropDown[0] ? !isDropDown[1] : true])
    }

    function closeMenues() {
        setMenuOpened(false);
        setDropDown(["", false]);
    }

    return (
        <>
            <nav className="bg-itemsLightBlue py-4 px-3 fixed w-full top-0 left-0 relative z-20">
                <div className="container mx-auto max-w-[1200px] flex items-center justify-between relative">
                    <p className="text-2xl max-md:ml-3">Your Logo</p>
                    <FontAwesomeIcon icon={faBars} className="text-2xl block md:hidden max-md:mr-3" onClick={() => {setMenuOpened(!menuOpened)}} />
                    <ul className={`flex items-center max-md:flex-col max-md:absolute max-md:top-[100%] ${menuOpened ? "max-md:left-[-12px]" : "max-md:left-[-100%]"} transition-all duration-300 max-md:p-3 max-md:bg-itemsLightBlue max-md:w-3/4`}>
                        {LINKS.map(ele => (
                            <>
                                <li key={ele.path} className={`mx-3 ${ele.children ? "mr-5" : ""} max-md:my-3 text-gray-500 relative hover:text-black max-md:hover:pl-2 transition-all duration-300`} onClick={(event) => {openMenu(event, ele.label)}}><a href={ele.path} className="flex">
                                    {ele.label}
                                    {ele.children ? (
                                    <>
                                        <img src={downArrow} alt="Drop down arrow" className="absolute top-[1px] right-[-25px] max-md:hidden" />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="md:hidden w-4 ml-2 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </>    
                                ) : ""}
                                </a>
                                    <ul className={`sub-ul absolute bg-itemsLightBlue z-10 max-md:top-0  ${isDropDown[0] == ele.label && isDropDown[1] ? "md:bottom-[-140px] max-md:opacity-100 max-md:right-[-133px]" : "md:bottom-[1000px] max-md:right-[100px] max-md:opacity-0"} transition-all duration-300`}>
                                        {ele.children?.map(child => {
                                            {idCounter++}
                                            return <li className="pl-4 pr-10 py-2" key={`${ele.path}-${idCounter}`}><a href={child.path}>{child.label}</a></li> })}
                                    </ul>
                                </li>
                            </>
                        ))}
                        <MainBtn roundedFull={true}>Contact Us</MainBtn>
                    </ul>
                </div>
            </nav>
            {menuOpened ? (
                <div className="animate-fade md:hidden z-10 absolute top-0 left-0 w-full h-screen bg-black opacity-45"></div>
            ) : ""}
        </>
    )
}
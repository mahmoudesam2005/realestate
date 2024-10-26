import React from "react";


function MainBtn({roundedFull, fullWidth, children}) {

    return (
        <li className="mx-3 max-md:my-3 list-none flex"><a href="" className={`${fullWidth ? "w-full flex justify-center items-center" : ""}  bg-mainColor text-white hover:bg-mainColorHover flex transition ${roundedFull ? "rounded-full" : "rounded-lg"} px-4 py-2`}>{children}</a></li>
    )
}

export default MainBtn;
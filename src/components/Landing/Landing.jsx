import React from "react";
import landingImg from "../../assets/imgs/landing.png";
import "./Landing.css"
import SearchArea from "../SearchArea/SearchArea";

export default function Landing() {
    return (
        <div className="w-full bg-secondaryColor pt-16 md:h-[490px] px-3">
            <div className="container mx-auto max-w-[1200px] flex justify-between max-md:flex-col">
                <div className="welcome-section max-sm:order-2">
                    <h1 className="text-4xl font-bold">
                        Bring Your Family's <br /> Happiness to Your <br /> Dream House
                    </h1>
                    <p className="leading-loose text-grayColor mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="landing-img max-sm:order-1 relative sm:top-[50px] top-[30px] border-r-[12px] border-b-[12px] border-mainColor md:min-w-[380px] max-sm:w-full max-sm:mb-[70px]">
                    <img src={landingImg} alt="Landing Image" className="max-w-full rounded-tl-lg w-full" />
                </div>
                <SearchArea />
            </div>
        </div>
    )
}
import React from "react";
import { useForm } from "react-hook-form";
import SelectBlock from "../SelectBlock/SelectBlock";
import location from "../../assets/icons/locationSolid.svg";
import propertyType from "../../assets/icons/propertyType.svg"
import price from "../../assets/icons/price.svg";
import MainBtn from "../MainBtn/MainBtn";

const SELECTS = [
    {children: "Location", icon: location, dataList: ["Turkey", "UK", "USA"]},
    {children: "Type", icon: propertyType, dataList: ["Appartement", "House", "Villa"]},
    {children: "Price Range", icon: price, dataList: ["50K-100K $", "150K-200K $", "250K-300K $"]}
]

export default function SearchArea() {

    const { register, handleSubmit } = useForm();

    return (
        <form className="shadow-md md:absolute max-md:relative max-md:order-3 top-[50%] transform md:-translate-y-1/2 md:mt-7 lg:mt-0 max-md:mt-24 max-md:mb-10">
            <div className="flex">
                <button className="bg-mainColor text-white hover:bg-mainColorHover transition px-12 py-3">Buy</button>
                <button className="hover:bg-mainColorHover hover:text-white transition px-12 py-3">Buy</button>
            </div>
            <div action="" className="max-md:flex max-md:justify-evenly max-md:pt-2 md:grid md:grid-cols-2 lg:grid-cols-4 items-center rounded-b-lg overflow-hidden bg-white">
                {SELECTS.map(ele => (
                    <SelectBlock dataList={ele.dataList} icon={ele.icon} control={register}>{ele.children}</SelectBlock>
                ))}
                <div className="max-md:hidden">
                    <MainBtn rounded="lg">
                        Explore Now
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-4 ml-2 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg> 
                    </MainBtn>
                </div>
            </div>
        </form>
    )
}
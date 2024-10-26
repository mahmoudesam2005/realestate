import React from 'react';
import location from "../../assets/icons/locationSolid.svg";
import MainBtn from '../MainBtn/MainBtn';


export default function Realestate({mainData, ...otherProbs}) {

    return (
        <div className="pb-2 mx-auto flex flex-col shadow-[0_0_10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] w-full cursor-pointer" {...otherProbs}>
            <div className="img relative w-full">
                <img src={mainData["image"]} alt="Realestate" className='max-w-full w-full'/>
                <p className="bg-mainBlack text-white rounded-lg px-2 py-[3px] absolute top-[10px] left-[10px]">For Sale</p>
            </div>
            <div className="realestate-info px-4 py-2">
                <h3 className='text-2xl my-2'>{mainData["title"]}</h3>
                <div className="flex border-b-[1px] border-gray-300 py-2">
                    <img src={location} alt="Location" />
                    <p className="text-grayColor">{mainData["address"]}</p>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 py-3 border-b-[1px] border-gray-300">
                    {mainData["chambers"].map(chamber => (
                        <div className="flex my-2">
                            <img src={chamber.icon} alt={chamber.title} className='mr-2' />
                            <p className='text-grayColor'>{chamber.title}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-x-6 py-3">
                    {mainData["postInfo"].map(info => (
                        <div className="flex">
                            <img src={info.icon} alt={info.title} className='mr-2' />
                            <p className='text-grayColor'>{info.title}</p>
                    </div>
                    ))}
                </div>
            </div>
            <MainBtn fullWidth={true}>{mainData.price}</MainBtn>
        </div>
    )
}

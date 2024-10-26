import React from 'react'
import squares from "../../assets/icons/squares.svg";
import car from "../../assets/icons/car.svg";
import bed from "../../assets/icons/bed.svg";
import bath from "../../assets/icons/bath.svg";
import person from "../../assets/icons/person.svg";
import time from "../../assets/icons/time.svg";
import Realestate from '../Realestate/Realestate';
import unit1 from "../../assets/units/unit1.png";
import unit2 from "../../assets/units/unit2.png";
import unit3 from "../../assets/units/unit3.png";

const UNITES = [
    { 
        image: unit1, 
        title: "1963 Crescent Heights Blvd", 
        address: "Hills, CA 90210", 
        price: "$5,304,000", 
        chambers: [
            { icon: squares, title: "2400 Square Feet" },
            { icon: car, title: "2 Garages" },
            { icon: bed, title: "20 Bedrooms" },
            { icon: bath, title: "1 days ago" }
        ], 
        postInfo: [
            { icon: person, title: "Michel Smith" }, 
            { icon: time, title: "1 days ago" }
        ]
    },
    { 
        image: unit2, 
        title: "1963 Crescent Heights Blvd", 
        address: "Hills, CA 90210", 
        price: "$5,304,000", 
        chambers: [
            { icon: squares, title: "2400 Square Feet" },
            { icon: car, title: "2 Garages" },
            { icon: bed, title: "20 Bedrooms" },
            { icon: bath, title: "1 days ago" }
        ], 
        postInfo: [
            { icon: person, title: "Michel Smith" }, 
            { icon: time, title: "1 days ago" }
        ]
    },
    { 
        image: unit3, 
        title: "1963 Crescent Heights Blvd", 
        address: "Hills, CA 90210", 
        price: "$5,304,000", 
        chambers: [
            { icon: squares, title: "2400 Square Feet" },
            { icon: car, title: "2 Garages" },
            { icon: bed, title: "20 Bedrooms" },
            { icon: bath, title: "1 days ago" }
        ], 
        postInfo: [
            { icon: person, title: "Michel Smith" }, 
            { icon: time, title: "1 days ago" }
        ]
    }
];


export default function Unites() {

    let id = -1;

    return (
    <div className="container px-3 max-w-[1200px] mx-auto grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {UNITES.map(unit => {
            id++
            return <Realestate mainData={unit} key={unit[`${unit.title}-${id}`]} />;
        })}
    </div>
    )
}

import React from 'react'
import feature1 from "../../assets/features/feature1.svg";
import feature2 from "../../assets/features/feature2.svg";
import feature3 from "../../assets/features/feature3.svg";
import feature4 from "../../assets/features/feature4.svg";
import Feature from '../Feature/Feature';

const FEATURES = [
    {icon: feature1, children: "250+", caption: "Total Construction"},
    {icon: feature2, children: "110+", caption: "Apartio Rooms"},
    {icon: feature3, children: "190+", caption: "Apartments Sold"},
    {icon: feature4, children: "560+", caption: "Total Area Sq"}
]

export default function Features() {
    return (
        <div className="container px-3 max-w-[1200px] mx-auto grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
            {FEATURES.map(feature => (
                <Feature icon={feature.icon} caption={feature.caption}>{feature.children}</Feature>
            ))}
        </div>
    )
}

import React from "react";
import Landing from "../components/Landing/Landing";
import Features from "../components/Features/Features";
import MainHeading from "../components/MainHeading/MainHeading";
import Unites from "../components/Unites/Unites";

export default function Home() {
    return (
        <main>
            <Landing />
            <div className="mt-44">
                <Features />
            </div>
            <MainHeading caption="For sale">Our Best Unites</MainHeading>
            <Unites />
            <MainHeading caption="Our services">Our Main Focus</MainHeading>
        </main>
    )
}
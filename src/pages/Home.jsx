import React from "react";
import Landing from "../components/Landing/Landing";
import Features from "../components/Features/Features";

export default function Home() {
    return (
        <main>
            <Landing />
            <div className="mt-44">
                <Features />
            </div>
        </main>
    )
}
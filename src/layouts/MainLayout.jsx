import React from "react";
import Navlink from "../components/Navlink";

export default function MainLayout() {
    return (
        <>
         <nav className="flex py-4 px-16 justify-between opacity-100 z-10">
           <h1 className="title">Portfolio Syahdan</h1>
           <div className="flex gap-3">
            {/* <Navlink href="/"><h1>Home</h1></Navlink> */}
           </div>
         </nav>
        </>
    )
}
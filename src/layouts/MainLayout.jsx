import React from "react";
import Navlink from "../components/Navlink";


export default function MainLayout({children}) {
    return (
        <>
         <nav className="flex py-4 px-16 justify-between opacity-100 z-10">
           <h1 className="title">syahdanisme</h1>
           <div className="flex gap-10">
            <Navlink href="/">Home</Navlink>
            <Navlink href="/aboutme">About</Navlink>
            <Navlink href="/projects">Projects</Navlink>
            <Navlink href="/certificate">Certificates</Navlink>
           </div>
         </nav>
         {children}
         <footer className="py-10 px-16 fixed bottom-0 w-screen">
          <div className="flex justify-between w-full">
            <span className="text-sm font-extralight text-black">copyright © 2025 , Syahdan</span>
            <span className="text-sm font-extralight text-black flex gap-2" style={{alignItems:"center"}}>
              <span>Powered by React</span>
              <img rel="icon" src="../../public/react.svg" width={"20px"} height={"20px"} />
              <span>, Tailwindcss</span>
              <img rel="icon" src="../../public/tailwindcss.svg" width={"20px"} height={"20px"} />
            </span>
          </div>
         </footer>
         {/* <img rel="icon" src="../../public/react.svg" width={"5px"} height={"5px"} /> */}
        </>
    )
}
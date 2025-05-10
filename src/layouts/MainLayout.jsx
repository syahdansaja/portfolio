import Navlink from "../components/Navlink";
import { Link } from "react-router";
import ReactIcon from "../assets/images/react.svg";
import tailwindCssIcon from "../assets/images/tailwindcss.svg";


export default function MainLayout({children}) {
    return (
        <>
         <nav className="flex justify-between fixed top-0 left-0 right-0 items-center px-6 py-4 bg-none z-50">
           <Link className="title" to="/" >syahdanisme</Link>
           <div className="flex gap-10">
            <Navlink to="/">Home</Navlink>
            <Navlink to="/aboutme">About</Navlink>
            <Navlink to="/projects">Projects</Navlink>
            <Navlink to="/certificates">Certificates</Navlink>
           </div>
         </nav>
         {children}
         <footer className="px-6 fixed bottom-0 w-screen">
          <div className="flex justify-between w-full">
            <span className="text-sm font-extralight text-black">copyright © 2025 , Syahdan</span>
            <span className="text-sm font-extralight text-black flex gap-2" style={{alignItems:"center"}}>
              <span>Powered by React</span>
              <img rel="icon" src={ReactIcon} width={"20px"} height={"20px"} />
              <span>, Tailwindcss</span>
              <img rel="icon" src={tailwindCssIcon} width={"20px"} height={"20px"} />
            </span>
          </div>
         </footer>
        </>
    )
}
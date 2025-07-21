import Navlink from "../components/Navlink";
import { Link } from "react-router";
import ReactIcon from "../assets/images/react.svg";
import tailwindCssIcon from "../assets/images/tailwindcss.svg";


export default function MainLayout({children}) {
    return (
        <>
         <nav className={`navbar flex justify-between fixed top-0 left-0 right-0 w-full items-center px-6 py-4 bg-white z-50`}>
           <Link className="title" to="/" >syahdanisme</Link>
           <div className="flex gap-10">
            <Navlink to="/">Home</Navlink>
            <Navlink to="/aboutme">About</Navlink>
            <Navlink to="/projects">Projects</Navlink>
            <Navlink to="/certificates">Certificates</Navlink>
           </div>
         </nav>
         {children}
         <footer className="px-8 py-0 h-64 w-full bg-gray-700">
             <div className="min-h-[90%] min-w-[100%]"></div>
             <div className="flex justify-between">
                 <span>
                     <span className="text-sm text-white text-shadow-gray-950 text-shadow-2xs">Created by Syahdan</span>
                 </span>
                 <span className="flex">
                     <span className="text-sm text-white text-shadow-gray-950 text-shadow-2xs">Build with React   </span>
                     <img className="max-w-[20px] min-w-[20px] ml-2" style={{ }} src={ReactIcon} />
                     <span className="text-sm text-white text-shadow-gray-950 text-shadow-2xs ml-2">and TailwindCSS</span>
                     <img className="max-w-[20px] min-w-[20px] ml-2" style={{ }} src={tailwindCssIcon} />
                 </span>
             </div>
         </footer>
        </>
    )
}
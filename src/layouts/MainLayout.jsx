import Navlink from "../components/Navlink";
import { Link } from "react-router";
import ReactIcon from "../assets/images/react.svg";
import tailwindCssIcon from "../assets/images/tailwindcss.svg";
import { useEffect, useState } from "react";


export default function MainLayout({children}) {
    const [visible, setVisible] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    function handleScroll () {
      const currentScrollY = window.scrollY;
      if(currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > 50) {
        setVisible(false);
      }
      setLastScrollY(currentScrollY);
    }
    useEffect(() => {
      const timeout = setTimeout(() => setInitialLoad(false), 100);
      window.addEventListener('scroll', handleScroll);
      return () => {
        clearTimeout(timeout);
        window.removeEventListener('scroll', handleScroll);
      }
    }, [lastScrollY]);
    return (
        <>
         <nav className={`navbar flex justify-between fixed top-0 left-0 right-0 w-full items-center px-6 py-4 bg-white z-50 transition-opacity duration-500 ease-in-out ${!visible ? 'opacity-0 pointer-events-none' : 'opacity-65'} ${initialLoad ? 'opacity-0' : ''}`}>
           <Link className="title" to="/" >syahdanisme</Link>
           <div className="flex gap-10">
            <Navlink to="/">Home</Navlink>
            <Navlink to="/aboutme">About</Navlink>
            <Navlink to="/projects">Projects</Navlink>
            <Navlink to="/certificates">Certificates</Navlink>
           </div>
         </nav>
         {children}
         <footer className="px-6 w-screen bottom-0 bg-gray-700">
          <div className="flex justify-between w-full">
            <span className="text-sm font-extralight text-white">copyright © 2025 , Syahdan</span>
            <span className="text-sm font-extralight text-white flex gap-2" style={{alignItems:"center"}}>
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
import React from "react";

export default function Navlink({children, href}) {
    return (
        <link rel="icon" href={href} className={`text-lg font-semibold text-black hover:text-shadow-teal-50`} style={{ textDecoration: "none" }} >{children}</link>
    )
}
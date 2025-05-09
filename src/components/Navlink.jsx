import React from "react";
import { Link } from "react-router";

export default function Navlink({to, children}) {
    return (
        <Link
          className="text-xl font-semibold"
          style={{ textDecoration: "none" }}
          to={to}
        >
            {children}
        </Link>
    )
}
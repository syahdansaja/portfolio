import { Link } from "react-router";

export default function Navlink({to, children}) {
    return (
        <Link
          className="text-xl font-semibold decoration-nav"
          to={to}
        >
            {children}
        </Link>
    )
}
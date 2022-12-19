import React from "react";
import WorldTimeCurl from "../components/WorldTimeCurl";
import { Link, Outlet } from "react-router-dom"

export default function Users() {
    return (
        <>
            <Link className="linkRouter" to="/timezone">
                <button>World Cities</button>
            </Link>

            <WorldTimeCurl />
        <Outlet/>

        </>
    )
}

import {  Routes, Route } from "react-router-dom";

import Users from "../pages/Users";
import Home from "../pages/Home"
import Timezone from "../pages/Timezone"


export default function Switch() {

    return(
        <Routes>
            <Route>
                <Route path="/"element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="timezone" element={<Timezone />} />
                
                
            
            </Route>
        </Routes>
    )

}

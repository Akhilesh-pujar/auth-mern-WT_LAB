import React from "react";
import Navbar from "../components/Navbar";

import FindUsers from "../components/FindUsers";
import Loader from "../components/Loader";
import Addphoto from "../components/Addphoto";

export default function Dashbord() {

    // const [showModel, setShowModel] = useState(false);

    return(
        <div className="bg-[#CCD0CF] h-screen">
            <Navbar></Navbar>
        
            <FindUsers></FindUsers>
            {/* <Addphoto></Addphoto> */}
        </div>
    )
}
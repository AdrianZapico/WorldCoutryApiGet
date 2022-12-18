import React from "react";
import { useEffect, useState } from "react";
import { FuseArea } from "./style";

export default function WorldTimeCurl(props) {

    const [worldTime, setWorldTime] = useState([])


    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone`)
            .then(response => response.json())
            .then(data => setWorldTime(data))
    }, [])

    return (
        <>
            {/* {console.log(worldTime)} */}
            

                {worldTime.map(object => {
                    return (
                        <FuseArea >{object}</FuseArea>
                    )
                })}

            








        </>
    )
}
import React from "react";
import { useEffect, useState } from "react";

export default function Atlantic(props) {

    const [atlanticTime, setAtlantic] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Atlantic`)
            .then(response => response.json())
            .then(data => setAtlantic(data))
    }, [])

    return (
        <>
            <h1>{props.title}</h1>

            {atlanticTime.map(object => {
                return (
                    <div>{object}</div>
                )
            })}


        </>)



}
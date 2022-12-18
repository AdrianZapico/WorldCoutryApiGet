import React from "react";
import { useEffect, useState } from "react";

export default function EtcTime(props) {

    const [etcTimeTime, setEtcTime] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Etc`)
            .then(response => response.json())
            .then(data => setEtcTime(data))
    }, [])

    return (
        <>
        <h1>{props.title}</h1>

            {etcTimeTime.map(object => {
                return (
                    <div >{object}</div>
                )
            })}


        </>)



}
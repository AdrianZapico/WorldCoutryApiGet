import React from "react";
import { useEffect, useState } from "react";

export default function Antarctica(props) {

    const [antarcticaTime, setAntarctica] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Antarctica`)
            .then(response => response.json())
            .then(data => setAntarctica(data))
    }, [])

    return (
        <>
            <h1>{props.title}</h1>

            {antarcticaTime.map(object => {
                return (
                    <div>{object}</div>
                )
            })}


        </>)



}
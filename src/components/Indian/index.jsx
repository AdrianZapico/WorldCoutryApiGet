import React from "react";
import { useEffect, useState } from "react";

export default function Indian(props) {

    const [indianTime, setIndian] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Indian`)
            .then(response => response.json())
            .then(data => setIndian(data))
    }, [])

    return (
        <>
        <h1>{props.title}</h1>

            {indianTime.map(object => {
                return (
                    <div >{object}</div>
                )
            })}


        </>)



}
import React from "react";
import { useEffect, useState } from "react";

export default function Europe(props) {

    const [europeTime, setEurope] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Europe`)
            .then(response => response.json())
            .then(data => setEurope(data))
    }, [])

    return (
        <>
        <h1>{props.title}</h1>

            {europeTime.map(object => {
                return (
                    <div >{object}</div>
                )
            })}


        </>)



}
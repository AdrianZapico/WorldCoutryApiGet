import React from "react";
import { useEffect, useState } from "react";

export default function America(props) {

    const [americaTime, setAmerica] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/America`)
            .then(response => response.json())
            .then(data => setAmerica(data))
    }, [])

    return (
        <>
            <h1>{props.title}</h1>

            {americaTime.map(object => {
                return (
                    <div >{object}</div>
                )
            })}


        </>)



}
import React from "react";
import { useEffect, useState } from "react";

export default function Africa(props) {

    const [africaTime, setAfrica] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Africa`)
            .then(response => response.json())
            .then(data => setAfrica(data))
    }, [])

    return (
        <>
            <h1>{props.title}</h1>

            {africaTime.map(object => {
                return (
                    <div >{object}</div>
                )
            })}


        </>)



}
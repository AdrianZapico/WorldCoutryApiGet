import React from "react";
import { useEffect, useState } from "react";

export default function Pacific(props) {

    const [pacificTime, setPacific] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Pacific`)
            .then(response => response.json())
            .then(data => setPacific(data))
    }, [])

    return (
        <>
        <h1>{props.title}</h1>

            {pacificTime.map(object => {
                return (
                    <div >{object}</div>
                )
            })}


        </>)



}
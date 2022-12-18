import React from "react";
import { useEffect, useState } from "react";

export default function Antartica(props) {

    const [asiaTime, setAsia] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Asia`)
            .then(response => response.json())
            .then(data => setAsia(data))
    }, [])

    return (
        <>
        <h1>{props.title}</h1>

            {asiaTime.map(object => {
                return (
                    <div >{object}</div>
                )
            })}


        </>)



}
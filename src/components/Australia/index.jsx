import React from "react";
import { useEffect, useState } from "react";

export default function Australia(props) {

    const [australiaTime, setAustralia] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Australia`)
            .then(response => response.json())
            .then(data => setAustralia(data))
    }, [])

    return (
        <>
        <h1>{props.title}</h1>

            {australiaTime.map(object => {
                return (
                    <div >{object}</div>
                )
            })}


        </>)



}
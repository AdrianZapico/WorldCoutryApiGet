import React from "react";
import { useEffect, useState } from "react";
import {AfricaLinks} from "./styles"
import AfricaData from "./AfricaData.json"
import citiesname from "./citiesname.json"


export default function Africa(props) {

    const [africaTime, setAfrica] = useState([])

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/Africa/`)
            .then(response => response.json())
            .then(data => setAfrica(data))
    }, [])

  

    const url = `http://worldtimeapi.org/api/timezone/`
    
    return (
        
        <>
            {console.log()}
            <h1>{props.title}</h1>

            {citiesname.map(object => {
            
            
                return (
                    
                    
                    <div><AfricaLinks href={url + AfricaData }>{object}</AfricaLinks></div>
                )
            })

            }

           

        </>)



}
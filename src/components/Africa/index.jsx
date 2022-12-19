import React from "react";
import { useEffect, useState } from "react";
import {AfricaLinks} from "./styles"




export default function Africa(props) {

    const [africaTime, setAfrica] = useState([])
    const [city, setCity] = useState('')
    const url = `http://worldtimeapi.org/api/timezone/`
    const  handleTimeClick = (e) =>{
    
        setCity(`${url}/${props.timezone}/${e.target.innerHTML}`)
        fetch(city)
        .then(response => response.json())
        .then(data => alert(data.datetime))
    }

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/${props.timezone}/`)
            .then(response => response.json())
            .then(data => setAfrica(data))
    }, [])

 
    return (
        
        <>
            
            <h1>{props.title}</h1>
            
            {africaTime.map(object => {
       
                return (

                    <div>
                        <AfricaLinks onClick={handleTimeClick}>
                        {object.split('/')[1]}
                        
                        {object.split('/')[2] &&
                         `/${object.split('/')[2]}`
                        }
                        </AfricaLinks>
                    </div>
                )
            })

            }

           

        </>)



}
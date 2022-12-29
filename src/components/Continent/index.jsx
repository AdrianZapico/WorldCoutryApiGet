import React from "react";
import { useEffect, useState } from "react";
import { ContinentLinks, HoraData } from "./styles"



export default function Continent(props) {

    const [continentTime, setContinentTime] = useState([])
    const [city, setCity] = useState('')
    const url = `http://worldtimeapi.org/api/timezone/`
    const [toggle, setToggle] = useState(false)
    
    async function handleTimeClick(e) {

        //regex
        setCity(`${url}/${props.timezone}/${e.target.innerHTML}`)
        fetch(city)
            .then(response => response.json())
            .then(data => alert(data.datetime))
           
    }

    useEffect(() => {
        fetch(`http://worldtimeapi.org/api/timezone/${props.timezone}/`)
            .then(response => response.json())
            .then(data => setContinentTime(data))
    }, [])


    return (

        <>
        

            <h1>{props.title}</h1>

            {continentTime.map(object => {
                
                return (
                        
                    <div>{!toggle &&(
                        
                        <ContinentLinks  onClick={handleTimeClick}>
                            
                            {object.split('/')[1]}

                            {object.split('/')[2] &&
                                `/${object.split('/')[2]}`
                            } 
                        </ContinentLinks>
                        
                        )}
                        
                    </div>
                )
            })

            }

          

        </>)



}
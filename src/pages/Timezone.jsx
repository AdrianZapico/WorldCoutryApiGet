import React from "react";
import Continent from "../components/Continent";
import { GranBox, BoxTimezone, TopTitle } from "./styles";
import { useState } from "react";

export default function Timezone(props) {
    const timeZone = ['Africa','Asia','Antarctica','Australia','Atlantic','Europe','Indian','Pacific','America']
    

    const [toggle, setToggle] = useState(false)
   
    return (
        <>
        
            <GranBox>
                <TopTitle>Time Zone Regions</TopTitle>
                {timeZone.map(continente=>(
                    <BoxTimezone>
                   <button onClick={() => setToggle(!toggle)}>Show Regions</button>
                   {toggle &&(
                    <Continent  title={continente} timezone={continente} />)}
                    
                </BoxTimezone>
                ))
                }
                

               


            </GranBox>


    
  






        </>
    )
}

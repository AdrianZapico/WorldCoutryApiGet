import React from "react";
import Africa from "../components/Africa";
import America from "../components/America";
import Asia from "../components/Asia"
import Antarctica from "../components/Antarctica"

import { GranBox, BoxTimezone, TopTitle } from "./styles";

export default function Timezone(props){
    return(
        <>
        <GranBox>
            <TopTitle>Time Zone Regions</TopTitle>
        <BoxTimezone>
        <Africa title="Africa"/>
        </BoxTimezone>
        <BoxTimezone>
        <America title="America"/>
        </BoxTimezone>
        <BoxTimezone>
        <Asia title="Asia"/>
        </BoxTimezone>
        <BoxTimezone>
        <Antarctica title="Antarctica"/>
        </BoxTimezone>
        </GranBox>
       
        </>
    )
}

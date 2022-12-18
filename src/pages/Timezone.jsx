import React from "react";
import Africa from "../components/Africa";
import America from "../components/America";
import Asia from "../components/Asia"
import Antarctica from "../components/Antarctica"
import Atlantic from "../components/Atlantic"
import Australia from "../components/Australia"
import EtcTime from "../components/EtcTime";
import Europe from "../components/Europe";
import Indian from "../components/Indian"

import { GranBox, BoxTimezone, TopTitle } from "./styles";
import Pacific from "../components/Pacific";

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
        <BoxTimezone>
           <Atlantic title="Atlantic"/>
        </BoxTimezone>
        <BoxTimezone>
            <Australia title="Australia"/>
        </BoxTimezone>
        <BoxTimezone>
            <EtcTime title="EtcTimeZone"/>
        </BoxTimezone>
        <BoxTimezone>
            <Europe title="Europe"/>
        </BoxTimezone>
        <BoxTimezone>
            <Indian title="Indian"/>
        </BoxTimezone>
        <BoxTimezone>
            <Pacific title="Pacific"/>
        </BoxTimezone>
        
        
        </GranBox>
       
        </>
    )
}

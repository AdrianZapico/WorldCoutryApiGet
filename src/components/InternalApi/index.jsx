import React from "react";
import { useEffect, useState } from "react";

export default function GetUsers(props) {

    const [users, setUsers] = useState([])
    

    useEffect(() => {
        fetch(`http://26.168.201.218/`)
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <>
            {console.log(users)}
            
            <h1>Dados Yuri</h1>

                
            <h1>{users.teste}</h1>
  

        </>
    )
}
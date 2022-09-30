import React from "react";
import resorts from "../resorts";
import Card from "./Card"

/*
How to map over data to display all on designated page
*/

function allResorts(resorts){
    return <Card
    key={resorts.id}
    name={resorts.name}
    img={resorts.imgUrl}
    location={resorts.location}
    contact={resorts.contact}

    />
}

function Main (){
     return <main>
        {resorts.map(allResorts)}

    </main>
}

export default Main;
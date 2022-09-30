import React from "react";
import Card from "./Card";
import resorts from "../resorts";

function Main (){
     return <main>
        <Card
        img = {resorts[0].imgUrl}
        name = {resorts[0].name}
        location = {resorts[0].location}
        contact = {resorts[0].contact}
        />
        <Card
        img = {resorts[1].imgUrl}
        name = {resorts[1].name}
        location = {resorts[1].location}
        contact = {resorts[1].contact}
        />
        <Card
        img = {resorts[2].imgUrl}
        name = {resorts[2].name}
        location = {resorts[2].location}
        contact = {resorts[2].contact}
        />
    </main>
}

export default Main;
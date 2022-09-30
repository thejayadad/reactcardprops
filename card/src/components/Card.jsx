import React from "react";

function Card(props){
    return <>
        <div className="card">
            <img src={props.img} alt="main" />
            <h2>{props.name}</h2>
            <p>{props.location}</p>
            <p>{props.contact}</p>
            <div className="social">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-tiktok"></i>

            </div>
        </div>

    </>
}

export default Card;
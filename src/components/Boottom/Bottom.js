import "./Bottom.css";
import React from "react";


export default function Bottom(props){
    const verde=props.verde;
    const buttonSentence=props.buttonSentence;

    return(
        <div class="bottom">
        <a  href="#1" class={`button ${verde}`} onclick="dados()"><p>{buttonSentence}</p></a>
    </div>
    );
}
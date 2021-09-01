import "./Bottom.css";
import React from "react";


export default function Bottom(props){
    const verde=props.verde;
    const buttonSentence=props.buttonSentence;
    const link=props.link;

    return(
        <div className="bottom">
        <a  href={link} className={`button ${verde}`}><p>{buttonSentence}</p></a>
    </div>
    );
}
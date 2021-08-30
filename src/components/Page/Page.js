import React,{useState} from "react";
import menu from "../../Dados/Menu";
import "./Page.css";
import Choice from "./choice";



export default function Page(props){
    const verifyCategory= props.verifyCategory;
   
    return(
    <div class="page">

        {menu.map((typeFood,j)=> <Menu info={typeFood} j={j} verifyCategory={verifyCategory}/>)}

    </div>
    );
}

function Menu(props){
    const {title, type, suggestions}= props.info;
    const j=props.j;
    const verifyCategory= props.verifyCategory;

    function selectCategory(){
            menu[j].typeSelected = true;
    }
    function unselectCategory(){
        menu[j].typeSelected = false;
}


    return( 
        <div>
            <h2>{title}</h2>
            <div class={`${type} suggestion`}>
                {suggestions.map((suggestion,index)=> 
                <Choice info={suggestion} i={index} j={j} selectCategory={selectCategory} unselectCategory={unselectCategory} verifyCategory={verifyCategory}/>
                )} 
            </div>
        </div>
        );
}








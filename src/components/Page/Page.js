import React from "react";
import menu from "../../Dados/Menu";
import "./Page.css";
import Choice from "./choice";



export default function Page(props){
    const verifyCategory= props.verifyCategory;
    const pratos = props.pratos;
    const setPratos = props.setPratos;
    const addItem = props.addItem;
    const deselecionarItem =props.deselecionarItem;
    const aumentarQuantidadeItem = props.aumentarQuantidadeItem;
    const diminuirQuantidadeItem = props.diminuirQuantidadeItem;
  

    return(
    <div className="page">

        {menu.map((typeFood,j)=> <Menu key={j} info={typeFood} j={j} verifyCategory={verifyCategory} pratos={pratos} setPratos={setPratos} addItem={addItem} deselecionarItem={deselecionarItem} aumentarQuantidadeItem={aumentarQuantidadeItem} diminuirQuantidadeItem={diminuirQuantidadeItem}/>)}

    </div>
    );
}

function Menu(props){
    const {title, type, suggestions}= props.info;
    const j=props.j;
    const verifyCategory= props.verifyCategory;
    const pratos=props.pratos;
    const setPratos=props.pratos;
    const addItem = props.addItem;
    const deselecionarItem =props.deselecionarItem;
    const aumentarQuantidadeItem = props.aumentarQuantidadeItem;
    const diminuirQuantidadeItem = props.diminuirQuantidadeItem;

    function selectCategory(){
            menu[j].typeSelected = true;
    }
    function unselectCategory(){
        menu[j].typeSelected = false;
}


    return( 
        <div>
            <h2>{title}</h2>
            <div className={`${type} suggestion`}>
                 {suggestions.map((suggestion,index)=> 
                <Choice key={index} info={suggestion} i={index} j={j} selectCategory={selectCategory} unselectCategory={unselectCategory} verifyCategory={verifyCategory} pratos={pratos} setPratos={setPratos} addItem={addItem} deselecionarItem={deselecionarItem} aumentarQuantidadeItem={aumentarQuantidadeItem} diminuirQuantidadeItem={diminuirQuantidadeItem}/>
                )}  
            </div>
        </div>
        );
}








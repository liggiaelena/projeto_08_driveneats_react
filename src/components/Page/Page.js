import React,{useState} from "react";
import menu from "../../Dados/Menu";
import "./Page.css";



export default function Page(){
  


    return(
    <div class="page">

        {menu.map((typeFood)=> <Menu info={typeFood} />)}

    </div>
    );
}

function Menu(props){
    const {title, type, suggestions}= props.info;

    return( 
        <div>
            <h2>{title}</h2>
            <div class={`${type} suggestion`}>
                {suggestions.map((suggestion)=> <Choice info={suggestion} />)} 
            </div>
        </div>
        );
       
}

function Choice(props){
    const {name, imgSrc, imgAlt , description1, description2, price} = props.info;
    const [border, setBorder]= useState("");
    const [buttons, setButtons]= useState("disappear");
    const [quantity,setQuantity]= useState(1);

    function select(){
        setBorder("border");
        setButtons("");  
    }

    function unselected(){
         setBorder("");
            setButtons("disappear"); 
    }

    function remove(quant){
        console.log(quant)
        if(quant === 1){
           unselected();
            
        }
        else{
             setQuantity(quantity - 1);
        }
       
    }
    function add(){
        setQuantity(quantity + 1);
    }

    return(
            <div className={`choice ${border}`} onClick={select}>
                <img src={imgSrc} alt={imgAlt}/>
                <h3>{name}</h3>
                <p>{description1}<br/>{description2}</p>
                <div className="price-and-quantities">
                    <h4>R$ <span>{price}</span></h4>
                    <div className={`mini-buttom ${buttons}`}>

                        <button className="red" onClick={
                            (evento)=>{
                                remove(quantity);
                                evento.stopPropagation()}}>-</button> 
                            {quantity}
                        <button className=" ligthgreen"onClick={add} >+</button>       
                    </div>
                </div>
                
            </div>
        );
}






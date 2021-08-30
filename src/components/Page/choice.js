import React,{useState} from "react";
import menu from "../../Dados/Menu";

let pratos=[];

export default function Choice(props){
    const {name, imgSrc, imgAlt , description1, description2, price,selected} = props.info;
    const index=props.i;
    const j=props.j;
    const verifyCategory=props.verifyCategory;
    const selectCategory = props.selectCategory;
    const unselectCategory = props.unselectCategory;
    const [border, setBorder]= useState("");
    const [buttons, setButtons]= useState("disappear");
    const [quantity,setQuantity]= useState(1);
    const [selecionar, setSelecionar]= useState({name,quantity});
    
    function select(){
        
        setBorder("border");
        setButtons("");  
        selectCategory();
        verifyCategory();
        menu[j].suggestions[index].selected=true;

        setSelecionar({name,quantity})
        pratos.push(selecionar);   
        console.log(pratos);
    }

   function unselected(){
         setBorder("");
        setButtons("disappear"); 
        menu[j].suggestions[index].selected=false;
       

         pratos =[
             ...pratos.filter((prato)=> {
            
            
            if(JSON.stringify(prato)!== JSON.stringify(selecionar)){
                
                return true;
            }
            else{
                return false;
            }
        })
         ]
         console.log(pratos);
    

        if(!menu[j].suggestions[0].selected && !menu[j].suggestions[1].selected && !menu[j].suggestions[2].selected && !menu[j].suggestions[3].selected){
            unselectCategory();
            verifyCategory();
        }
        
    }

    function remove(quant){

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
                        <button className=" ligthgreen"onClick={
                            (evento)=>{
                                add();
                                evento.stopPropagation()}} >+</button>       
                    </div>
                </div>
                
            </div>
        );
}
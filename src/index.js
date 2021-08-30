import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import menu from "./Dados/Menu";
import Top from "./components/Top/Top";
import Page from './components/Page/Page';
import Bottom from './components/Boottom/Bottom';
import "./CSS/reset.css";
import "./CSS/styles.css";

function Root(){
    const[verde, setVerde] = useState("");
    const[buttonSentence,setButtonSentence] = useState("Selecione os 3 itens para fechar o pedido");

    function verifyCategory(){
        
        if(menu[0].typeSelected && menu[1].typeSelected && menu[2].typeSelected){
            setVerde("verde");
            setButtonSentence("Fechar pedido");
        }
        else{
            setVerde("");
            setButtonSentence("Selecione os 3 itens para fechar o pedido");
        }
        
    }
    
    return(
        <div>
            <Top />
            <Page verifyCategory={verifyCategory}/>
            <Bottom verde={verde} buttonSentence={buttonSentence}/>
        </div>
        
    );
}

ReactDOM.render(<Root />, document.querySelector(".root"));


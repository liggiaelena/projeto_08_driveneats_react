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
    const[pratos, setPratos]=useState([]);
    let novoPratos= [];

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

    function addItem(item){ 
        
        console.log(item)
        setPratos([...pratos,item]);
        console.log(pratos);
    }
    function deselecionarItem(item){
         novoPratos =[
           ...pratos.filter((prato)=> {
         
            if(JSON.stringify(prato.name)!== JSON.stringify(item.name)){
               
                return true;
            }
        })
        ]
        setPratos(novoPratos);
        console.log(novoPratos);
        console.log(pratos)
    }
    function aumentarQuantidadeItem(item,quantity){
        novoPratos =[
            ...pratos.map((prato)=> {
           
           if(JSON.stringify(prato.name) == JSON.stringify(item.name)){
               prato.quantity = quantity +1;
            console.log(prato.quantity)
              console.log(prato.name)
              console.log(item.name)
               return prato;
           }
            else{
                return prato;
            }
        })]

        setPratos(novoPratos);
        console.log(novoPratos);
        console.log(pratos);
    }

    function diminuirQuantidadeItem(item,quantity){
           novoPratos =[
              ...pratos.map((prato)=> {
           
              if(JSON.stringify(prato.name) == JSON.stringify(item.name)){
                prato.quantity = quantity -1;
              
                return prato;
            }
            else{
                return prato;
            }
        })]
        setPratos(novoPratos);
        console.log(novoPratos);
        console.log(pratos);
    }


    
    return(
        <div>
            <Top />
            <Page verifyCategory={verifyCategory} pratos={pratos} setPratos={setPratos}  addItem={addItem} deselecionarItem={deselecionarItem} aumentarQuantidadeItem={aumentarQuantidadeItem} diminuirQuantidadeItem={diminuirQuantidadeItem}/>
            <Bottom verde={verde} buttonSentence={buttonSentence}/>
        </div>
        
    );
}

ReactDOM.render(<Root />, document.querySelector(".root"));


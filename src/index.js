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
    const[link,setLink] = useState("");
    const[pratos, setPratos]=useState([]);
    let novoPratos= [];

    function verifyCategory(){
        
        if(menu[0].typeSelected && menu[1].typeSelected && menu[2].typeSelected){
            setVerde("verde");
            setButtonSentence("Fechar pedido");
            creatLink();
        }
        else{
            setVerde("");
            setButtonSentence("Selecione os 3 itens para fechar o pedido");

        }
        
    }

    function addItem(item){ 
        let test=true;
        pratos.find((prato)=>{
            
            if(JSON.stringify(prato.name)=== JSON.stringify(item.name)){
               test=false;
              
                return true;
            }
        })
        if(test){
            pratos.push(item);
            setPratos([...pratos]);
        }
  
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
       
    }
    function aumentarQuantidadeItem(item,quantity){
        novoPratos =[
            ...pratos.map((prato)=> {
           
           if(JSON.stringify(prato.name) === JSON.stringify(item.name)){
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
    }

    function diminuirQuantidadeItem(item,quantity){
           novoPratos =[
              ...pratos.map((prato)=> {
           
              if(JSON.stringify(prato.name) === JSON.stringify(item.name)){
                prato.quantity = quantity -1;
              
                return prato;
            }
            else{
                return prato;
            }
        })]
        setPratos(novoPratos);
        
    }

    function creatLink(){
        const fixed = "https://wa.me/5515991379663?text=";
        let valorTotal=0;

        pratos.forEach(prato => {
            let valor= parseFloat(prato.price.replace(",","."));
            valorTotal = valorTotal + (valor*prato.quantity);
            console.log(valorTotal)
            console.log(valor)
        });

        const salgados = pratos.filter((prato)=>{
            if(prato.j === 0){
                return true;
            }
        })
        const bebidas = pratos.filter((bebida)=>{
            if(bebida.j === 1){
                return true;
            }
        })
        const sombremessas = pratos.filter((sobremesa)=>{
            if(sobremesa.j === 2){
                return true;
            }
        })

        const textoSalgados = salgados.map((salgado)=> `${salgado.name} (${salgado.quantity}x)\n`);
        const textoBebidas = bebidas.map((bebida)=> `${bebida.name} (${bebida.quantity}x)\n`);
        const textoSobrmessas = sombremessas.map((sobremesa)=> `${sobremesa.name} (${sobremesa.quantity}x)\n`);

        const texto = `-Prato: ${textoSalgados}-Bebida:${textoBebidas}-Sobremesa: ${textoSobrmessas}Total: R$ ${valorTotal}`
        const textoCodificado = encodeURIComponent(texto);
        const menssagem = fixed+ textoCodificado;
        setLink(menssagem);
        console.log(texto);

    }
    
    return(
        <div>
            <Top key={1}/>
            <Page key={2} verifyCategory={verifyCategory} pratos={pratos} setPratos={setPratos}  addItem={addItem} deselecionarItem={deselecionarItem} aumentarQuantidadeItem={aumentarQuantidadeItem} diminuirQuantidadeItem={diminuirQuantidadeItem}/>
            <Bottom key={3} verde={verde} buttonSentence={buttonSentence} pratos={pratos} link={link} />
        </div>
        
    );
}

ReactDOM.render(<Root />, document.querySelector(".root"));


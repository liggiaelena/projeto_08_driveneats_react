import menu from "../Dados/Menu";

export default function Page(){
    return(
    <div class="page">

        {menu.map((typeFood)=> <Menu info={typeFood}/>)}

    </div>
    );
}

function Menu(props){
    const {title, type, suggestions}= props.info;
    console.log(suggestions);

    return( 
        <div>
            <h2>{title}</h2>
            <div class={`${type} suggestion`}>
                {suggestions.map((suggestion)=> <Choice info={suggestion}/>)} 
            </div>
        </div>
        );
       
}

function Choice(props){
   
    const {name, imgSrc, imgAlt , description1, description2, price} = props.info;

    return(
            <div class="choice" onclick="selectPlate(this)">
                <img src={imgSrc} alt={imgAlt}/>
                <h3>{name}</h3>
                <p>{description1}<br/>{description2}</p>
                <h4>R$ <span>{price}</span></h4>
                <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
            </div>
        );
}






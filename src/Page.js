export default function Page(){
    return(
    <div class="page">
        <h2>Primeiro, seu prato</h2>
        <div class="plate suggestion"> 
          <div class="choice" onclick="selectPlate(this)">
            <img src="fotos/macarrao.jpg" alt="macarrão"/>
            <h3>Macarronada da tia</h3>
            <p>Vem com queijo<br/>Molho à bolonhesa</p>
            <h4>R$ <span>20,30</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
          <div class="choice" onclick="selectPlate(this)">
            <img src="fotos/strogonoff.jpg" alt="strogonoff"/>
            <h3>Strogonoff da tia</h3>
            <p>Vem com queijo<br/>Molho à bolonhesa</p>
            <h4>R$ <span>25,00</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
          <div class="choice" onclick="selectPlate(this)">
            <img src="fotos/peixe-frito.jpg" alt="peixe frito"/>
            <h3>Peixe-frito da tia</h3>
            <p>Vem com queijo<br/>Molho à bolonhesa</p>
            <h4>R$ <span>30,00</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
          <div class="choice" onclick="selectPlate(this)">
            <img src="fotos/Carne-de-Panela.png" alt="Carne-de-Panela"/>
            <h3>Carne de panela</h3>
            <p>Vem com queijo<br/>Molho à bolonhesa</p>
            <h4>R$ <span>31,00</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
        </div>
      <h2>Agora, sua bebida</h2>
        <div class="drink suggestion"> 
          <div class="choice"  onclick="selectDrink(this)">
            <img src="fotos/suco-de-laranja.jpg" alt="suco de laranja"/>
            <h3>Suco de laranja</h3>
            <p>Sem gelo<br/>Sem açucar</p>
            <h4>R$ <span>7,50</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
          <div class="choice" onclick="selectDrink(this)">
            <img src="fotos/milk-shake.jpg" alt="milk-shake"/>
            <h3>Milk-shake</h3>
            <p>Com gelo<br/>Com açucar</p>
            <h4>R$ <span>15,00</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
          <div class="choice" onclick="selectDrink(this)">
            <img src="fotos/agua.jpg" alt="água"/>
            <h3>Água</h3>
            <p>Sem gelo<br/>Sem açucar</p>
            <h4>R$ <span>4,00</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
          <div class="choice" onclick="selectDrink(this)">
            <img src="fotos/agua.jpg" alt="água"/>
            <h3>Água com guás</h3>
            <p>Sem gelo<br/>Sem açucar</p>
            <h4>R$ <span>4,50</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
        </div>
       <h2>Por fim, seu sobremesa</h2>
        <div class="dessert suggestion"> 
          <div class="choice" onclick="selectDessert(this)">
            <img src="fotos/panqueca.jpg" alt="panqueca"/>
            <h3>Panqueca</h3>
            <p>Com mel ou melado<br/>Opcional as frutas</p>
            <h4>R$ <span>15,00</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
          <div class="choice"  onclick="selectDessert(this)">
            <img src="fotos/sorvete.jpg" alt="sorvete"/>
            <h3>Sorvete</h3>
            <p>Com mel ou melado<br/>Opcional as frutas</p>
            <h4>R$ <span>10,00</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
          <div class="choice"  onclick="selectDessert(this)">
            <img src="fotos/torta-morango.jpg" alt="torta-de-chocolate"/>
            <h3>Torta de morango</h3>
            <p>Com mel ou melado<br/>Opcional as frutas</p>
            <h4>R$ <span>10,00</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
          <div class="choice"  onclick="selectDessert(this)">
            <img src="fotos/torta-de-chocolate.jpg" alt="torta-de-chocolate"/>
            <h3>Torta de chocolate</h3>
            <p>Com mel ou melado<br/>Opcional as frutas</p>
            <h4>R$ <span>11,00</span></h4>
            <ion-icon name="checkmark-circle" class="icon disappear"></ion-icon>
          </div>
        </div>
    </div>
    );
}
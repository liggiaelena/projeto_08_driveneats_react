const menu = [
    {
        title:'Primeiro, seu prato',
        type:'plate',
        typeSelected:false,
        suggestions:[
        {
            name: 'Macarronada da tia',
            imgSrc: 'fotos/macarrao.jpg' ,
            imgAlt: 'macarrão',
            description1:'Vem com queijo',
            description2:'Molho à bolonhesa',
            price:'20,30',
            selected: false
        },
        {
            name: 'Strogonoff da tia',
            imgSrc: 'fotos/strogonoff.jpg' ,
            imgAlt: 'strogonoff',
            description1:'Vem com queijo',
            description2:'Molho à bolonhesa',
            price:'25,00',
            selected: false
        },
        {
            name: 'Peixe-frito da tia',
            imgSrc: 'fotos/peixe-frito.jpg' ,
            imgAlt: 'peixe frito',
            description1:'Vem com queijo',
            description2:'Molho à bolonhesa',
            price:'30,00',
            selected: false
        },
        {
            name: 'Carne de panela',
            imgSrc: 'fotos/Carne-de-Panela.png' ,
            imgAlt: 'Carne-de-Panela',
            description1:'Vem com queijo',
            description2:'Molho à bolonhesa',
            price:'31,00',
            selected: false
        }
        ]
    },
    {
    title:'Agora, sua bebida',
    type:'drink',
    typeSelected:false,
    suggestions:[
        {
            name: 'Suco de laranja',
            imgSrc: 'fotos/suco-de-laranja.jpg' ,
            imgAlt: 'suco de laranja',
            description1:'Com gelo',
            description2:'Sem açucar',
            price:'7,50' ,
            selected: false       
},
        {
            name: 'Milk-shake',
            imgSrc: 'fotos/milk-shake.jpg' ,
            imgAlt: 'milk-shake',
            description1:'Com gelo',
            description2:'Sem açucar',
            price:'15,00',
            selected: false
        },
        {
            name: 'Água',
            imgSrc: 'fotos/agua.jpg' ,
            imgAlt: 'água',
            description1:'Com gelo',
            description2:'Sem açucar',
            price:'4,50' ,
            selected: false       
        },
        {
            name: 'Água com gás',
            imgSrc: 'fotos/agua.jpg' ,
            imgAlt: 'água',
            description1:'Com gelo',
            description2:'Sem açucar',
            price:'4,50' ,
            selected: false      
         }
        ]
    }, 
    {
    title:'Por fim, seu sobremesa',
    type:'dessert',
    typeSelected:false,
    suggestions:[
        {
            name: 'Panqueca',
            imgSrc: 'fotos/panqueca.jpg' ,
            imgAlt: 'panqueca',
            description1:'Com mel ou melado',
            description2:'Opcional as frutas',
            price:'15,00',
            selected: false
        },
        {
            name: 'Sorvete',
            imgSrc: 'fotos/sorvete.jpg' ,
            imgAlt: 'Sorvete',
            description1:'Com mel ou melado',
            description2:'Opcional as frutas',
            price:'15,00',
            selected: false
        },
        {
            name: 'Torta de morango',
            imgSrc: 'fotos/torta-morango.jpg ',
            imgAlt: 'Torta-de-morango',
            description1:'Com mel ou melado',
            description2:'Opcional as frutas',
            price:'10,00',
            selected: false
        },
        {
            name: 'Torta de Chocolate',
            imgSrc: 'fotos/torta-de-chocolate.jpg' ,
            imgAlt: 'torta-de-chocolate',
            description1:'Com mel ou melado',
            description2:'Opcional as frutas',
            price:'11,00',
            selected: false
        }
    ]

}
]



export default menu;

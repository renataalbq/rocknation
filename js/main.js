const items = [
    {
        id: 0,
        nome: 'camiseta slipknot',
        img:  'imgs/slip-frente.png',
        quantidade:'1'

    },
    {
        id: 1,
        nome: 'camiseta metallica',
        img:  'imgs/metallica.png',
        quantidade:'1'

    },
    {
        id: 2,
        nome: 'camiseta pink floyd',
        img:  'imgs/pinkfloyd.png',
        quantidade:'1'

    },
    {
        id: 3,
        nome: 'camiseta linkin park',
        img:  'imgs/linkin.png',
        quantidade:'1'

    },
    {
        id: 4,
        nome: 'camiseta nirvana',
        img:  'imgs/nirvana.png',
        quantidade:'1'

    },
    {
        id: 5,
        nome: 'camiseta soad',
        img:  'imgs/system.png',
        quantidade:'1'

    },

]

inicializar = () => {
    var containerProdutos = document.getElementById('produtos')
    items.map((val)=>{
        containerProdutos.innerHTML += `
            <a href="compra.html">
                <div class="card-deck">
                    <div class="card col-sm m-2 ml-2">
                        <img class="card-img-top" src="`+val.img+`"></a>
                        <div class="card-body">
                            <p class="card-text text-uppercase">`+val.nome+`</p>
                            <span class="card-text">de <s>R$ 40,00</s> por</span> <span class="text-danger font-weight-bold">R$ 30,00</span>
                            <p class="card-text text-center">3x de R$10,00</p>
                            <a key="`+val.id+`" href="#" class="text-decoration-none text-dark">
                                <span class="material-icons">
                                add_shopping_cart</span>
                            </a>
                        </div>
                    </div>
                </div>
            </a>
        `

    })
}


inicializar();
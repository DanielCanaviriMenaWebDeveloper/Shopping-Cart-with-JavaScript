let shop = document.getElementById('shop');

let shopItemsData = [ 
    {
        id: 1,
        name: "Casual Shirt",
        price: 120,
        desc: "Camisa casual de color verde claro manga larga.",
        img: "images/img-1.jpg"
    },
    {
        id: 2,
        name: "Office Shirt",
        price: 100,
        desc: "Camisas de officina en color azul y rosado.",
        img: "images/img-2.jpg"
    },
    {
        id: 3,
        name: "T Shirt",
        price: 12.67,
        desc: "Polera color blanco de cuello redondo.",
        img: "images/img-3.jpg"
    },
    {
        id: 4,
        name: "Mens Suit",
        price: 23.5,
        desc: "Traje color negro elegante para hombres.",
        img: "images/img-4.jpg"
    }, 
    {
        id: 5,
        name: "Casual Shirt",
        price: 156,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        img: "images/img-1.jpg"
    },
    {
        id: 6,
        name: "Office Shirt",
        price: 20,
        desc: "Lorem ipsum dolor sit amet dolor sit amet, consectetur.",
        img: "images/img-2.jpg"
    },
    {
        id: 7,
        name: "T Shirt",
        price: 180,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        img: "images/img-3.jpg"
    },
    {
        id: 8,
        name: "Mens Suit",
        price: 70,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        img: "images/img-4.jpg"
    } 
];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map( (x)=>{
        let { id, name, price, desc, img } = x;
        return  `
            <div id="product-id-${id}" class="item">
                <img width="220" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">4</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
    } )
    .join(""));
};

generateShop();

let decrement = (id) => {
    let selectedItem = id; 
    console.log(selectedItem);
};
let increment = (id) => {
    console.log(id);
};
let update = () => {};
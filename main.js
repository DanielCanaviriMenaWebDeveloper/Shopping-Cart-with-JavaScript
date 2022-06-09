let shop = document.getElementById('shop');

let shopItemsData = [ 
    {
        id: 1,
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        img: "images/img-1.jpg"
    },
    {
        id: 2,
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet dolor sit amet, consectetur.",
        img: "images/img-2.jpg"
    },
    {
        id: 3,
        name: "T Shirt",
        price: 12.67,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        img: "images/img-3.jpg"
    },
    {
        id: 4,
        name: "Mens Suit",
        price: 23.5,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        img: "images/img-4.jpg"
    }, 
    {
        id: 1,
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        img: "images/img-1.jpg"
    },
    {
        id: 2,
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet dolor sit amet, consectetur.",
        img: "images/img-2.jpg"
    },
    {
        id: 3,
        name: "T Shirt",
        price: 12.67,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        img: "images/img-3.jpg"
    },
    {
        id: 4,
        name: "Mens Suit",
        price: 23.5,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        img: "images/img-4.jpg"
    } 
];

    let generateShop = () => {
        return (shop.innerHTML = shopItemsData.map( (x)=>{
            return  `
                <div class="item">
                    <img width="220" src="${x.img}" alt="">
                    <div class="details">
                        <h3>${x.name}</h3>
                        <p>${x.desc}</p>
                        <div class="price-quantity">
                            <h2>$ ${x.price}</h2>
                            <div class="buttons">
                                <i class="bi bi-dash-lg"></i>
                                <div class="quantity">4</div>
                                <i class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `
        } )
        .join(""));
    };

generateShop();
const cars = [
    {
        id: 1,
        car_name: "Civic",
        brand_name: "Honda",
        price: 25000,
        image: "/images/1.webp",
    },
    {
        id: 2,
        car_name: "Corolla",
        brand_name: "Toyota",
        price: 28000,
        image: "/images/2.png",
    },
    {
        id: 3,
        car_name: "Accord",
        brand_name: "Honda",
        price: 30000,
        image: "/images/3.webp",
    },
    {
        id: 4,
        car_name: "Camry",
        brand_name: "Toyota",
        price: 32000,
        image: "/images/4.jpg",
    },
    {
        id: 5,
        car_name: "Fusion",
        brand_name: "Ford",
        price: 27000,
        image: "/images/5.webp",
    },
    {
        id: 6,
        car_name: "Altima",
        brand_name: "Nissan",
        price: 29000,
        image: "/images/6.jpg",
    },
    {
        id: 7,
        car_name: "Sonata",
        brand_name: "Hyundai",
        price: 26000,
        image: "/images/7.webp",
    },
    {
        id: 8,
        car_name: "Impreza",
        brand_name: "Subaru",
        price: 31000,
        image: "/images/8.webp",
    },
];
const shop = document.getElementById("shop");

const generateShope = () => {
    return (shop.innerHTML = cars
        .map((x) => {
            const { car_name, brand_name, price, id, image } = x;
            return `<div class="card  bg-base-100 shadow-xl">
        <figure>
            <img
                src=${image}
                alt="Shoes"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${car_name}</h2>
            <p class="font-bold">$${price}</p>
            <div class="card-actions">
                <button onclick="showCartItem(${id})" class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>`;
        })
        .join(""));
};
generateShope();

const cardItem = document.getElementById("card-item");
const length = document.getElementById("length");
let selectedItem = [];

const showCartItem = (id) => {
    const search = cars.find((x) => x.id === id);
    selectedItem.push(search);
    console.log(search);
    const cardItem = document.getElementById("card-item");
    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "gap-3");
    div.innerHTML = `
    <img width="60px" src="${search.image}"/>
    <h2 class="">${search.car_name}</h2>
    <h2 class="" ><i onclick="decrement(event)" class="fa-solid fa-minus"></i> <span id="quantity">1</span> <i onclick="increment(event)" class="fa-solid fa-plus"></i> </h2>
    <h2 class="">$<span id="price">${search.price}</span></h2>
    
    `;
    cardItem.appendChild(div);
};

const increment = (id) => {
    console.log(id.target.parentNode.children[1].innerText);
    let quantity = +id.target.parentNode.children[1].innerText;
    quantity = quantity +1;
    id.target.parentNode.children[1].innerText = quantity;
    // calculation(id, quantityValue);
};
const decrement = (id) => {
    console.log(id.target.parentNode.children[1]);
    console.log(id.target.parentNode.children[1].innerText);
    let quantity = +id.target.parentNode.children[1].innerText;
    if(quantity === 1) return;
    quantity = quantity -1;
    id.target.parentNode.children[1].innerText = quantity;
    calculation(id, quantity);
};

const calculation = (id, quantity) => {
    const price = document.getElementById("price");
    const search = selectedItem.find((x) => x.id === id);
    // price.innerHTML = search.price * quantity;
    
};

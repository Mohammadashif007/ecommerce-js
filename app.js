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
let selectedItem = [];
const showCartItem = (id) => {
    console.log(selectedItem);
    const search = cars.find((x) => x.id === id);
    selectedItem.push(search);
    cardItem.innerHTML = selectedItem.map(x => `
    <div class="flex justify-between gap-3 mt-2">
    <img
    width="40px"
    src=${x.image}
    alt=""
/>
    <h2 class=""> ${x.car_name}</h2>
    <p>$${search.price}</p>
    </div>
    `).join('')
};

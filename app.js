const cars = [
    {
        id: 1,
        car_name: "Civic",
        brand_name: "Honda",
        price: 25000,
    },
    {
        id: 2,
        car_name: "Corolla",
        brand_name: "Toyota",
        price: 28000,
    },
    {
        id: 3,
        car_name: "Accord",
        brand_name: "Honda",
        price: 30000,
    },
    {
        id: 4,
        car_name: "Camry",
        brand_name: "Toyota",
        price: 32000,
    },
    {
        id: 5,
        car_name: "Fusion",
        brand_name: "Ford",
        price: 27000,
    },
    {
        id: 6,
        car_name: "Altima",
        brand_name: "Nissan",
        price: 29000,
    },
    {
        id: 7,
        car_name: "Sonata",
        brand_name: "Hyundai",
        price: 26000,
    },
    {
        id: 8,
        car_name: "Impreza",
        brand_name: "Subaru",
        price: 31000,
    },
];

const shop = document.getElementById("shop");

const generateShope = () => {
    return (shop.innerHTML = cars
        .map((x) => {
            return `<div class="card  bg-base-100 shadow-xl">
        <figure>
            <img
                src="/images/1.webp"
                alt="Shoes"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>`;
        })
        .join(""));
};
generateShope();

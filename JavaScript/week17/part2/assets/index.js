class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand
    }

    getInfo() {
        return `${this.type}, ${this.brand}`;
    }

    getPrice() {
        return `${this.price}`;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }
    
    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getDoorsCount = this.getDoorsCount.bind(this);

    getDoorsCount() {
        return `Кол-во дверей: ${this.doors}`;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    
    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getMaxSpeed = this.getMaxSpeed.bind(this);
    
    getMaxSpeed() {
        return `Макс. скорость: ${this.maxSpeed} км/ч`;
    }
}

const main=document.querySelector('.main');

const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://avatars.mds.yandex.net/get-verba/216201/2a000001849f191073704ae650c1cc538a48/cattouchret'
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];


data.forEach((item)=>{
    if (item.type === 'car'){
        const car = new Car(item.type, item.price, item.brand, item.doors);
        const carElement = document.createElement('div');
        carElement.innerHTML = `
            <img class="image" src="${item.image}" alt="${item.brand}">
            <h2>${car.getInfo()}</h2>
            <p>${car.getDoorsCount()}</p>
            <p>${car.getPrice()}</p>
        `;
        main.appendChild(carElement);
    } else if (item.type === 'bike') {
        const bike = new Bike(item.type, item.price, item.brand, item.maxSpeed);
        const bikeElement = document.createElement('div');
        bikeElement.innerHTML = `
            <img class="image" src="${item.image}" alt="${item.brand}">
            <h2>${bike.getInfo()}</h2>
            <p>${bike.getMaxSpeed()}</p>
            <p>${bike.getPrice()}</p>
        `;
        main.appendChild(bikeElement);
    }
});
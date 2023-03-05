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
    image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
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


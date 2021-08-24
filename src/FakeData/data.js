import bike from '../Images/bike.png';
import car from '../Images/car.png';
import bus from '../Images/bus.png';
import train from '../Images/train.png';
import mapImg from '../Images/map.png';






const bikes = [
    {
        "id": 1,
        "name": "Bike",
        "image": bike,
        "destination": {
            "map": mapImg,
        },
        "available": [{
            "seats": "1",
            "rent": "$20"
        }, {
            "seats": "1",
            "rent": "$15"
        },
        {
            "seats": "1",
            "rent": "$30"
        }]
    }
]

const cars = [
    {
        "id": 2,
        "name": "Car",
        "image": car,
        "destination": {
            "map": mapImg,
        },
        "available": [{
            "seats": "4",
            "rent": "$20"
        }, {
            "seats": "3",
            "rent": "$15"
        },
        {
            "seats": "2",
            "rent": "$30"
        }]
    }
];

const buses = [
    {
        "id": 3,
        "name": "Bus",
        "image": bus,
        "destination": {
            "map": mapImg,
        },
        "available": [{
            "seats": "40",
            "rent": "$20"
        }, {
            "seats": "50",
            "rent": "$15"
        },
        {
            "seats": "25",
            "rent": "$30"
        }]
    }
];

const trains = [
    {
        "id": 4,
        "name": "Train",
        "image": train,
        "destination": {
            "map": mapImg,
        },
        "available": [{
            "seats": "40",
            "rent": "$20"
        }, {
            "seats": "50",
            "rent": "$15"
        },
        {
            "seats": "25",
            "rent": "$30"
        }]
    }
]

export const fakeData = [...bikes, ...cars, ...buses, ...trains]
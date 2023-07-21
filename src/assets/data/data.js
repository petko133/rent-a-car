import audi from '../../assets/images/audi-a5-s-line-coupe.jpg';
import bmw from '../../assets/images/m5.jpg';
import mercedes from '../../assets/images/cls63-amg.jpg';
import peugeot from '../../assets/images/308.jpg';
import honda from '../../assets/images/cr-v.jpg';
import vw from '../../assets/images/scirocco.jpg';

const carsData = [
  {
    id: 1,
    name: 'Audi',
    model: 'A5 S-line',
    year: '2013',
    doors: '2/3',
    ac: 'yes',
    transmission: 'manual',
    fuel: 'petrol',
    img: { audi },
    price: 35,
  },
  {
    id: 2,
    name: 'BMW',
    model: 'm5',
    year: '2010',
    doors: '4/5',
    ac: 'yes',
    transmission: 'manual',
    fuel: 'petrol',
    img: { bmw },
    price: 25,
  },
  {
    id: 3,
    name: 'Mercedes',
    model: 'CLS 63 AMG',
    year: '2011',
    doors: '4/5',
    ac: 'yes',
    transmission: 'automatic',
    fuel: 'petrol',
    img: { mercedes },
    price: 45,
  },
  {
    id: 4,
    name: 'Peugeot',
    model: '308',
    year: '2013',
    doors: '4/5',
    ac: 'yes',
    transmission: 'manual',
    fuel: 'diesel',
    img: { peugeot },
    price: 20,
  },
  {
    id: 5,
    name: 'Honda',
    model: 'CR-v',
    year: '2011',
    doors: '4/5',
    ac: 'yes',
    transmission: 'manual',
    fuel: 'diesel',
    img: { honda },
    price: 20,
  },
  {
    id: 6,
    name: 'VW',
    model: 'Scirocco',
    year: '2012',
    doors: '2/3',
    ac: 'yes',
    transmission: 'manual',
    fuel: 'diesel',
    img: { vw },
    price: 25,
  },
];

export default carsData
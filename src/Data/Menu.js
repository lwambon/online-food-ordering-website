// Import all images from the assets folder
import paneerTikkaPizza from "../assets/paneerTikkaPizza.jpg";
import veggiedelight from "../assets/veggiedelight.jpg";
import farmhouse from "../assets/farmhouse.jpg";
import cheesepizza from "../assets/cheesepizza.jpg";
import wood_fire from "../assets/wood fire.jpg";
import chocolateShake from "../assets/chocolateShake.jpg";
import coldCoffee from "../assets/coldCoffee.jpg";
import oreoShake from "../assets/oreoShake.jpg";
import strawberrySmoothie from "../assets/Strawberry  Smoothie.jpg";
import idliSambar from "../assets/Idli Sambar.jpg";
import mysoreMasalaDosa from "../assets/Mysore masala dosa.jpg";
import uttapam from "../assets/uttapam.jpeg";
import whiteSaucePasta from "../assets/White Sauce Pasta.jpg";
import redSaucePasta from "../assets/RED SAUSE.jpg";
import pinkSaucePasta from "../assets/pink Sauce.jpg";
import schezwanNoodles from "../assets/Schezwan Noodles.jpg";
import hakkaNoodles from "../assets/Hakka Noodles.jpg";
import chilliGarlicNoodles from "../assets/chilli garlic noodle.jpg";
import chilliPotato from "../assets/Honey Chilli Potatoes.jpg";
import garlicBread from "../assets/garlic bread.jpeg";
import chilliPaneer from "../assets/chillipaneer.jpg";
import burger from "../assets/burger.jpeg";
import amritsariKulcha from "../assets/Amritsari Kulcha.jpeg";
import cholaBhatura from "../assets/chola Bhatura.jpeg";
import lassi from "../assets/dry fruit lassi.jpeg";
import cheeseNachos from "../assets/chesse nachos.jpeg";
import veggieNachos from "../assets/Veggie Nachos.jpeg";
import taco from "../assets/Taco.jpeg";
import guavaJuice from "../assets/Guava juice.jpeg";
import pineappleJuice from "../assets/pineapple juice.jpeg";
import orangeJuice from "../assets/orange juice (2).jpg";
import iceCreamSundae from "../assets/Ice Cream Sundae.jpeg";
import blueberryCheesecake from "../assets/Blueberry Cheesecake.jpeg";
import chocolateSundae from "../assets/chocolateShake.jpg";
import gulabJamun from "../assets/gulab jamun.jpeg";
import pastries from "../assets/Pastries.jpeg";
import dalTadka from "../assets/Dal Tadka.jpeg";
import dalMakhani from "../assets/Dal Makhani.jpeg";
import dalFry from "../assets/Dal Fry Recipe.jpg";
import handiPaneer from "../assets/handi Paneer.jpeg";
import kadaiPaneer from "../assets/Kadai Paneer.jpeg";
import shahiPaneer from "../assets/Shahi Paneer.jpeg";
import paneerButterMasala from "../assets/Paneer Butter Masala.jpeg";
import butterNaan from "../assets/Bullet Naan.jpeg";
import garlicNaan from "../assets/Garlic  Naan.jpeg";
import lacchaParatha from "../assets/Lacchha Parantha.jpeg";
import friedRice from "../assets/fried rice.jpeg";
import jeeraRice from "../assets/jeera Rice.jpeg";
import pulao from "../assets/Pulao.jpeg";

const menuItems = [
  {
    id: "1",
    image: paneerTikkaPizza,
    item_name: "Paneer Tikka Pizza",
    original_price: 850,
    rating: {
      stars: 5,
      count: 1400,
    },
  },
  {
    id: "2",
    image: veggiedelight,
    item_name: "Veggie Delight Pizza",
    original_price: 950,
    rating: {
      stars: 4.5,
      count: 1000,
    },
  },
  {
    id: "3",
    image: farmhouse,
    item_name: "Farmhouse Pizza",
    original_price: 1000,
    rating: {
      stars: 5.5,
      count: 1500,
    },
  },
  {
    id: "4",
    image: cheesepizza,
    item_name: "Cheese Pizza",
    original_price: 750,
    rating: {
      stars: 4.5,
      count: 1300,
    },
  },
  {
    id: "5",
    image: wood_fire,
    item_name: "Wood Fire Pizza",
    original_price: 780,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "6",
    image: chocolateShake,
    item_name: "Chocolate Shake",
    original_price: 320,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "7",
    image: coldCoffee,
    item_name: "Cold Coffee",
    original_price: 250,
    rating: {
      stars: 4.5,
      count: 1200,
    },
  },
  {
    id: "8",
    image: oreoShake,
    item_name: "Oreo Shake",
    original_price: 200,
    rating: {
      stars: 5,
      count: 1600,
    },
  },
  {
    id: "9",
    image: strawberrySmoothie,
    item_name: "Strawberry Smoothie",
    original_price: 400,
    rating: {
      stars: 5,
      count: 1800,
    },
  },
  {
    id: "10",
    image: idliSambar,
    item_name: "Idli Sambar",
    original_price: 450,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "11",
    image: mysoreMasalaDosa,
    item_name: "Mysore Masala Dosa",
    original_price: 560,
    rating: {
      stars: 5,
      count: 1500,
    },
  },
  {
    id: "12",
    image: uttapam,
    item_name: "Uttapam",
    original_price: 780,
    rating: {
      stars: 4,
      count: 1300,
    },
  },
  {
    id: "13",
    image: whiteSaucePasta,
    item_name: "White Sauce Pasta",
    original_price: 650,
    rating: {
      stars: 4,
      count: 1500,
    },
  },
  {
    id: "14",
    image: redSaucePasta,
    item_name: "Red Sauce Pasta",
    original_price: 590,
    rating: {
      stars: 4,
      count: 1600,
    },
  },
  {
    id: "15",
    image: pinkSaucePasta,
    item_name: "Pink Sauce Pasta",
    original_price: 699,
    rating: {
      stars: 4,
      count: 1600,
    },
  },

  {
    id: "16",
    image: pinkSaucePasta,
    item_name: "Pink Sause Pasta",
    original_price: 750,
    rating: {
      stars: 4,
      count: 1700,
    },
  },

  {
    id: "17",
    image: schezwanNoodles,
    item_name: "Schezwan Noodles",
    original_price: 300,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "18",
    image: hakkaNoodles,
    item_name: "Hakka Noodles",
    original_price: 400,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "19",
    image: chilliGarlicNoodles,
    item_name: "Chilli Garlic Noodles",
    original_price: 450,
    rating: { stars: 4, count: 1900 },
  },
  {
    id: "20",
    image: chilliPotato,
    item_name: "Chilli Potato",
    original_price: 290,
    rating: { stars: 4, count: 1400 },
  },
  {
    id: "21",
    image: garlicBread,
    item_name: "Garlic Bread",
    original_price: 305,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "22",
    image: chilliPaneer,
    item_name: "Chilli Paneer",
    original_price: 205,
    rating: { stars: 3.5, count: 1300 },
  },
  {
    id: "23",
    image: burger,
    item_name: "Burger",
    original_price: 300,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "24",
    image: amritsariKulcha,
    item_name: "Amritsari Kulcha",
    original_price: 250,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "25",
    image: cholaBhatura,
    item_name: "Chola Bhatura",
    original_price: 550,
    rating: { stars: 5, count: 1500 },
  },
  {
    id: "26",
    image: lassi,
    item_name: "Lassi",
    original_price: 760,
    rating: { stars: 4, count: 1300 },
  },
  {
    id: "27",
    image: cheeseNachos,
    item_name: "Cheese Nachos",
    original_price: 360,
    rating: { stars: 5, count: 1600 },
  },
  {
    id: "28",
    image: veggieNachos,
    item_name: "Veggie Nachos",
    original_price: 700,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "29",
    image: taco,
    item_name: "Taco",
    original_price: 600,
    rating: { stars: 4, count: 1700 },
  },
  {
    id: "30",
    image: guavaJuice,
    item_name: "Guava Juice",
    original_price: 400,
    rating: { stars: 5, count: 1800 },
  },
  {
    id: "31",
    image: pineappleJuice,
    item_name: "Pineapple Juice",
    original_price: 450,
    rating: { stars: 5, count: 1900 },
  },
  {
    id: "32",
    image: orangeJuice,
    item_name: "Orange Juice",
    original_price: 550,
    rating: { stars: 4, count: 1200 },
  },
  {
    id: "33",
    image: iceCreamSundae,
    item_name: "Ice Cream Sundae",
    original_price: 380,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "34",
    image: blueberryCheesecake,
    item_name: "Blueberry Cheesecake",
    original_price: 400,
    rating: { stars: 4, count: 1700 },
  },
  {
    id: "35",
    image: chocolateSundae,
    item_name: "Chocolate Sundae",
    original_price: 700,
    rating: { stars: 4, count: 1900 },
  },
  {
    id: "36",
    image: gulabJamun,
    item_name: "Gulab Jamun",
    original_price: 570,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "37",
    image: pastries,
    item_name: "Pastries",
    original_price: 800,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "38",
    image: dalTadka,
    item_name: "Dal Tadka",
    original_price: 900,
    rating: { stars: 5, count: 1900 },
  },
  {
    id: "39",
    image: dalMakhani,
    item_name: "Dal Makhani",
    original_price: 980,
    rating: { stars: 4, count: 1900 },
  },
  {
    id: "40",
    image: dalFry,
    item_name: "Dal Fry",
    original_price: 780,
    rating: { stars: 4, count: 1400 },
  },
  {
    id: "41",
    image: handiPaneer,
    item_name: "Paneer Handi",
    original_price: 980,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "42",
    image: kadaiPaneer,
    item_name: "Kadhai Paneer",
    original_price: 499,
    rating: { stars: 4, count: 1700 },
  },
  {
    id: "43",
    image: shahiPaneer,
    item_name: "Shahi Paneer",
    original_price: 599,
    rating: { stars: 5, count: 1900 },
  },
  {
    id: "44",
    image: paneerButterMasala,
    item_name: "Paneer Butter Masala",
    original_price: 699,
    rating: { stars: 4.5, count: 1400 },
  },
  {
    id: "45",
    image: butterNaan,
    item_name: "Butter Naan",
    original_price: 799,
    rating: {
      stars: 5,
      count: 1900,
    },
  },
  {
    id: "46",
    image: garlicNaan,
    item_name: "Garlic Naan",
    original_price: 579,
    rating: {
      stars: 3.5,
      count: 1800,
    },
  },
  {
    id: "47",
    image: lacchaParatha,
    item_name: "Laccha Paratha",
    original_price: 680,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "48",
    image: friedRice,
    item_name: "Fried Rice",
    original_price: 450,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "49",
    image: jeeraRice,
    item_name: "Jeera Rice",
    original_price: 550,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "50",
    image: pulao,
    item_name: "Pilau",
    original_price: 570,
    rating: {
      stars: 4.5,
      count: 1800,
    },
  },
];

export default menuItems;

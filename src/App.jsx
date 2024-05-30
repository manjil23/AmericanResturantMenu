import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

const AmericanResturantMenu = [
  {
    id: nanoid(),
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$ 15.99",
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: nanoid(),
    title: "Diner Double",
    category: "lunch",
    price: "$ 13.99",
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: nanoid(),
    title: "Godzilla Milkshake",
    category: "shakes",
    price: "$ 6.99",
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: nanoid(),
    title: "Country Delight",
    category: "breakfast",
    price: "$ 20.99",
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`,
  },
  {
    id: nanoid(),
    title: "Egg Attack",
    category: "lunch",
    price: "$ 22.99",
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
  },
  {
    id: nanoid(),
    title: "Oreo Dream",
    category: "shakes",
    price: "$ 18.99",
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: nanoid(),
    title: "Bacon Overflow",
    category: "breakfast",
    price: "$ 8.99",
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
  },
  {
    id: nanoid(),
    title: "American Classic",
    category: "lunch",
    price: "$ 12.99",
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
  },
  {
    id: nanoid(),
    title: "Quarantine Buddy",
    category: "shakes",
    price: "$ 16.99",
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

function App() {
  const [currentMenu, setCurrentMenu] = useState(AmericanResturantMenu);
  return (
    <>
      <h1 className="underline">Our Menu</h1>
      <div className="btn">
        <button
          onClick={() => {
            setCurrentMenu(AmericanResturantMenu);
          }}
        >
          All
        </button>

        <button
          onClick={() => {
            setCurrentMenu(
              AmericanResturantMenu.filter(
                (item) => item.category === "breakfast"
              )
            );
          }}
        >
          Breakfast
        </button>
        <button
          onClick={() => {
            setCurrentMenu(
              AmericanResturantMenu.filter((item) => item.category === "lunch")
            );
          }}
        >
          Lunch
        </button>
        <button
          onClick={() => {
            setCurrentMenu(
              AmericanResturantMenu.filter((item) => item.category === "shakes")
            );
          }}
        >
          Shakes
        </button>
      </div>

      <div className="AllMenu">
        {currentMenu.map((resturant) => {
          const { id, title, price, img, desc } = resturant;
          return (
            <article key={id} className="Menu">
              <img src={img} alt={title}></img>
              <h3>
                {title}
                <span className="Price">{price}</span>
              </h3>
              <p className="para">{desc}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import menuItems from "../../Data/Menu";
import "./Menu.css";

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [visibleItems, setVisibleItems] = useState(15);

  const addToCart = (itemId) => {
    setCart([...cart, itemId]);
    localStorage.setItem("bagItems", JSON.stringify([...cart, itemId]));
    console.log("Added to cart:", itemId);
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-grid">
        {menuItems.slice(0, visibleItems).map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.item_name} />
            <h3 className="menu-name">{item.item_name}</h3>
            <p className="menu-price">KSH {item.original_price}</p>
            <p className="menu-ratings">
              {item.rating.stars} ⭐ ({item.rating.count / 100}k reviews)
            </p>
            <button className="menu-button" onClick={() => addToCart(item.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {visibleItems < menuItems.length && (
        <button
          className="view-more-btn"
          onClick={() => setVisibleItems(menuItems.length)}
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Menu;

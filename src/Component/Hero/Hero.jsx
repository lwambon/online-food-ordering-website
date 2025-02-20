import "./Hero.css";
import HeroVideo from "../../assets/herovideo.mp4";

function Hero() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted className="background-video">
        <source src={HeroVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <div className="hero-right">
          <h2 className="hero-title">
            Order your favorite
            <br />
            <span>meals and experience</span> <br /> fast and reliable Delivery
          </h2>
          <p>
            Healthy switcher chefs do all the prep work like peeling,
            <br /> chopping, and marinating so you can get fresh, tasty food.
          </p>
          <div className="order-button">
            <button className="hero-order-button">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

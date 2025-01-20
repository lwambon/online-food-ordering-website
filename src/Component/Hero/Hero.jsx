import "./Hero.css";
import HeroImg from "../../assets/hero.jpg";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <img src={HeroImg} alt=""  />
      </div>
      <div className="hero-right">
        <h2 className="hero-title">
          order your favaurite<br/><span> meals and experience</span> <br/> fast and reliable Delivery
        </h2>
        <p>
          Healthy switcher chefs do all the prep work line pedding,<br/> chopping and
          merinating so u can get fresh tasty foods
        </p>
        <div className="order-button">
            <button className="hero-order-button">order now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

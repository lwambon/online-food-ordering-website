import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-heading">...About Us...</h2>
      <div className="about-left">
        <h3 className="about-subheading">Welcome to Fast Food Delivery</h3>
        <p className="about-text">
          Indulge in the symphony of flavors at our exquisite culinary haven,
          where every dish tells a story of passion and innovation. Step into a
          world where gastronomy meets artistry, where each bite is a journey
          through meticulous craftsmanship and unparalleled taste.
          <br />
          <br />
          Welcome to a realm where ambiance whispers tales of elegance, every
          visit promises a culinary escapade beyond compare. Discover culinary
          excellence redefined, only at Fast Food Delivery.
        </p>
      </div>

      <div className="about-right">
        <div className="experience">
          <span className="num">10</span>
          <div className="text-part">
            <span className="text1">Years of</span>
            <span className="text2">EXPERIENCE</span>
          </div>
        </div>

        <div className="master-chef">
          <span className="num">30</span>
          <div className="text-part">
            <span className="text1">Popular</span>
            <span className="text2">MASTER CHEFS</span>
          </div>
        </div>

        <div className="happy-customers">
          <span className="num">100+</span>
          <div className="text-part">
            <span className="text1">Happy</span>
            <span className="text2">CUSTOMERS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

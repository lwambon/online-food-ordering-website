import "./AboutMore.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dishes from "../../Data/Dishes";

function AboutMore() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="about-more-section">
      <h1 className="about-more-heading">Our Delicious Dishes</h1>
      <div className="about-more-slider">
        <Slider {...settings}>
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <img src={dish.image} alt={dish.name} className="dish-image" />
              <h3 className="dish-name">{dish.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AboutMore;

import "./Testimonials.css";
import ClientInfo from "../../Data/Client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
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
    <div className="testimonials-section">
      <h1 className="testimonial-heading">.....Testimonials.....</h1>
      <h2 className="testimonials-subheading">Our Clients Say!!</h2>

      <div className="testimonials-container">
        <Slider {...settings}>
          {ClientInfo.map((client, index) => (
            <div className="testimonial-card" key={index}>
              <img
                src={client.image}
                alt={client.name}
                className="client-image"
              />
              <h3 className="client-name">{client.name}</h3>
              <p className="client-feedback">{client.feedback}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;

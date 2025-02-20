import About from "../../Component/About/About";
import AboutMore from "../../Component/AboutMore/AboutMore";
import Chefs from "../../Component/Chefs/Chefs";
import Testimonials from "../../Component/Testimonials/Testimonials";
import Services from "../Services/Services";

function AboutUs() {
  return (
    <div>
      <About />
      <Services />
      <AboutMore />
      <Chefs />
      <Testimonials />
    </div>
  );
}

export default AboutUs;

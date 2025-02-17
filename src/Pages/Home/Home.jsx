import Hero from "../../Component/Hero/Hero";
import About from "../../Component/About/About";
import Chefs from "../../Component/Chefs/Chefs";
import Testimonials from "../../Component/Testimonials/Testimonials";
import AboutMore from "../../Component/AboutMore/AboutMore";

function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <AboutMore/>
      <Chefs/>
      <Testimonials/>
    </div>
  );
}

export default Home;

import Hero from "../../Component/Hero/Hero";
import About from "../../Component/About/About";
import Chefs from "../../Component/Chefs/Chefs";
import Testimonials from "../../Component/Testimonials/Testimonials";
import AboutMore from "../../Component/AboutMore/AboutMore";
import AboutInfo from "../../Component/AboutInfo/AboutInfo";

function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <AboutMore/>
      <AboutInfo/>
      <Chefs/>
      <Testimonials/>
    </div>
  );
}

export default Home;

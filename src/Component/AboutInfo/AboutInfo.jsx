import "./AboutInfo.css";
import { FaHeadset } from "react-icons/fa6";
import { FaBabyCarriage } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

function AboutInfo() {
  return (
    <div className="info-container">
      <div className="info-card">
        <IoPerson className="info-icon" />
        <h2 className="info-title">Master Chefs</h2>
        <p className="info-information">
          Our team of skilled chefs bring years of culinary expertise to the
          table, ensuring that every meal is crafted to perfection with the
          finest ingredients.
        </p>
      </div>
      <div className="info-card">
        <FaUtensils className="info-icon" />
        <h2 className="info-title">Quality Food</h2>
        <p className="info-information">
          We focus on delivering high-quality food with exceptional taste. Each
          dish is prepared using only the freshest and finest ingredients
          available.
        </p>
      </div>
      <div className="info-card">
        <FaBabyCarriage className="info-icon" />
        <h2 className="info-title">Online Booking</h2>
        <p className="info-information">
          Our easy-to-use online booking system ensures that you can quickly
          order your favorite meals with just a few clicks, and have them
          delivered to your doorstep.
        </p>
      </div>
      <div className="info-card">
        <FaHeadset className="info-icon" />
        <h2 className="info-title">24/7 Services</h2>
        <p className="info-information">
          We offer round-the-clock service to cater to all your food cravings,
          no matter the time of day or night. We are always here to serve you!
        </p>
      </div>
    </div>
  );
}

export default AboutInfo;

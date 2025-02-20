import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="outer-footer-part">
      <div className="footer-part">
        <div className="company-section">
          <div className="heading-part">Company</div>
          <div className="inside-text">
            <a href="/about">
              <span>About Us</span>
            </a>
            <a href="/contact">
              <span>Contact Us</span>
            </a>
            <a href="/menu">
              <span>Menu</span>
            </a>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>

        <div className="contact-section">
          <div className="heading-part">Contact</div>
          <div className="inside-text">
            <div className="inside-text-part">
              <FaMapMarkerAlt />
              <span>123 Street, Nairobi, Kenya</span>
            </div>

            <div className="inside-text-part">
              <FaPhone />
              <span>+254 712 345 678</span>
            </div>

            <div className="inside-text-part">
              <FaEnvelope />
              <span>support@fastfood.com</span>
            </div>

            <div className="social-media">
              <Link to="/">
                <FaTwitter />
              </Link>
              <Link to="/">
                <FaFacebookF />
              </Link>
              <Link to="/">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="opening-section">
          <div className="heading-part">Opening</div>
          <div className="inside-text">
            <span>Monday - Saturday</span>
            <span>09 AM - 09 PM</span>
            <span>Sunday</span>
            <span>10 AM - 08 PM</span>
          </div>
        </div>

        <div className="newsletter-section">
          <div className="heading-part">Newsletter</div>
          <div className="login-screen">
            <input type="email" placeholder="Your email" />
            <button className="booking-btn2">
              <Link to="signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>

      <p className="developedBy">Made by Lucy Wambui Wanjiru</p>
      <p className="copyright">
        Copyright © {new Date().getFullYear()} Fast Food Delivery ®
      </p>
    </footer>
  );
}

export default Footer;

import "./Chefs.css";
import Chef1 from "../../assets/team-1.jpeg";
import Chef2 from "../../assets/team-2.jpeg";
import Chef3 from "../../assets/team-3.jpeg";
import Chef4 from "../../assets/team-4.jpeg";

function Chefs() {
  return (
    <div className="chefs-container">
      <h2 className="chef-title">our top chefs</h2>
      <div className="chef-section">
        <div className="chefs-info">
          <img className="chef-image" src={Chef1} alt="Chef 1" />
          <h4 className="chefs-name">Micheal Kibet</h4>
          <p className="chefs-title">Head Chef</p>
        </div>

        <div className="chefs-info">
          <img className="chef-image" src={Chef2} alt="Chef 2" />
          <h4 className="chefs-name">Wanjiru Kamau</h4>
          <p className="chefs-title">Pastry Chef</p>
        </div>

        <div className="chefs-info">
          <img className="chef-image" src={Chef3} alt="Chef 3" />
          <h4 className="chefs-name">Otieno Achieng</h4>
          <p className="chefs-title">Sous Chef</p>
        </div>

        <div className="chefs-info">
          <img className="chef-image" src={Chef4} alt="Chef 4" />
          <h4 className="chefs-name">Naliaka Wekesa</h4>
          <p className="chefs-title">Grill Master</p>
        </div>
      </div>
    </div>
  );
}

export default Chefs;

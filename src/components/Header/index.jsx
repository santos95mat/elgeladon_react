import logo from "../../assets/images/logo.png";
import "./style.css";
import star from "../../assets/images/star1.png";

const Header = (props) => {
  return (
    <header>
      <img alt="Logo" src={logo} />
      <a href="##">
        <img width="32px" src={star} alt="star" />
      </a>
    </header>
  );
};

export default Header;

import logo from "../../assets/images/logo.png";
import "./style.css";

const Header = (props) => {
  return (
    <header>
      <img alt="Logo" src={logo} />
    </header>
  );
};

export default Header;

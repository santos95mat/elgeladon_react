import logo from "../../assets/icons/logo.svg";
import add from "../../assets/icons/add.png";
import sacola from "../../assets/icons/sacola.svg";
import "./style.css";

const Header = (props) => {
  return (
    <header className="Header">
      <div className="Header__container">
        <div className="titulo">
          <img src={logo} width="60px" alt="alt"/>
          <h1>El Geladon</h1>
        </div>
        <div className="imgHeader">
          <img src={sacola} width="32px" alt="alt"/>
          <img
            alt="alt"
            onclick={"##"}
            src={add}
            width="32px"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

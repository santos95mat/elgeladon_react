import "./style.css";
import { useState } from "react";
import star from "../../assets/images/star.png";
import star1 from "../../assets/images/star1.png";

const Card = ({ characters }) => {
  const [showFav, setShowFav] = useState({});
  const getFavorite = (i) => {
    const p = {
      [i]: showFav[i] ? false : true,
    };
    setShowFav({ ...showFav, ...p });
  };

  const showFavorite = (i) => {
    if (!showFav[i]) {
      return star;
    } else {
      return star1;
    }
  };

  return (
    <>
      {characters.map((props, i) => {
        return (
          <div key={i} className="card">
            <h3>{props.name}</h3>
            <img className="img_p" alt="presonagem" src={props.image} />
            <img
              onClick={() => getFavorite(i)}
              className="img_s"
              alt="star"
              src={showFavorite(i)}
            />
          </div>
        );
      })}
    </>
  );
};

export default Card;

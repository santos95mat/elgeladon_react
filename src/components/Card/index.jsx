import "./style.css";
import { useState } from "react";
import star from "../../assets/images/star.png";
import star1 from "../../assets/images/star1.png";

const Card = ({ characters, filter }) => {
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
      {characters
        .filter((e) => {
          return e.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map((props) => {
          return (
            <div key={props.id} className="card">
              <h3>{props.name}</h3>
              <img className="img_p" alt="presonagem" src={props.image} />
              <img
                onClick={() => getFavorite(props.id)}
                className="img_s"
                alt="star"
                src={showFavorite(props.id)}
              />
            </div>
          );
        })}
    </>
  );
};

export default Card;

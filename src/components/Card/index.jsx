import "./style.css";
import star from "../../assets/images/star.png";
import star1 from "../../assets/images/star1.png";

const Card = (props) => {
  const getFavorite = (id) => {
    const favorite = document.getElementById(id);

    if (favorite.src === star) {
      favorite.src = star1;
    } else {
      favorite.src = star;
    }
  };

  return (
    <div className="card">
      <h3>{props.name}</h3>
      <img className="img_p" alt="presonagem" src={props.image} />
      <img
        onClick={() => getFavorite("fav" + props.id)}
        className="img_s"
        id={"fav" + props.id}
        alt="star"
        src={star}
      />
    </div>
  );
};

export default Card;

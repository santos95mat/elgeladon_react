import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <img alt="presonagem" src={props.image} />
    </div>
  );
};

export default Card;

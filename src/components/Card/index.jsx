import "./style.css";
import edit from "../../assets/icons/edit.png"
import bin from "../../assets/icons/bin.png"

const Card = ({ getCharacters, characters, filter }) => {
  const json = JSON.stringify(characters);
  localStorage.setItem("character", json);

  const delPaleta = async (id) => {
    const response = await fetch(
      `https://api-elgeladon-mongo.herokuapp.com/paletas/excluir-paleta/${id}`,
      {
        method: "DELETE",
        mode: "cors",
      }
    );

    getCharacters();
  }

  return (
    <>
      {characters
        .filter((e) => {
          return e.sabor.toLowerCase().includes(filter.toLowerCase());
        })
        .map((props) => {
          return (
            <div key={props._id} className="card">
              <img className="img_p" alt="presonagem" src={props.foto} />
              <div className="cardS">
                <h3>{props.sabor}</h3>
                <h3>R$ {props.preco.toFixed(2)}</h3>
                <div className="button">
                  <button className="btnEdit btn" onClick={"##"}>
                    <img src={edit} alt="alt"/>
                  </button>
                  <button className="btnDel btn" onClick={() => {
                    delPaleta(props._id)
                  }}>
                  <img src={bin} alt="alt"/>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;

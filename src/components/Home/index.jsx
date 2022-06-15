import Card from "../Card";
import { useState, useEffect } from "react";
import "./style.css";
import ReactLoading from "react-loading";

const Home = (props) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await fetch(
      "https://api-elgeladon-mongo.herokuapp.com/paletas/listar-todas"
    );
    const list = await res.json();

    setCharacters(list);
  };

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [filterInput, setFilterInput] = useState("");

  const handleSubmit = (event) => {
    setFilterInput(event.target.value);
  };

  return (
    <div className="main">
      <h2>Pesquisar Paleta por sabor</h2>
      <div className="search">
        <div className="form">
          <input
            id="search"
            value={filterInput}
            onChange={handleSubmit}
            type={"text"}
            placeholder="Digite o sabor da paleta"
          />
        </div>
      </div>
      <h2>Paletas disponíveis</h2>
      {characters.length === 0 ? (
        <div className="loading">
          <ReactLoading
            className="load"
            type="spinningBubbles"
            color="lightblue"
          />
        </div>
      ) : (
        <div className="cards">
          <Card getCharacters={getCharacters} filter={filterInput} characters={characters} />
        </div>
      )}
    </div>
  );
};

export default Home;

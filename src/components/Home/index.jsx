import Card from "../Card";
import { useState, useEffect } from "react";
import "./style.css";

const Home = (props) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await fetch(
      "https://api-elgeladon-mongo.herokuapp.com/characters/listar-todas"
    );
    const list = await res.json();

    setCharacters([...characters, ...list]);
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
    <div>
      <h2>Pesquisar Personagem por nome</h2>
      <div className="search">
        <div className="form">
          <input
            id="search"
            value={filterInput}
            onChange={handleSubmit}
            type={"text"}
            placeholder="Digite o nome do personagem"
          />
        </div>
      </div>
      <h2>Lista de Personagens</h2>
      <div className="cards">
        <Card filter={filterInput} characters={characters} />
      </div>
    </div>
  );
};

export default Home;

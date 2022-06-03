import search from "../../assets/images/search.png";
import { useState } from "react";
import Card from "../Card";
import "./style.css";

const Search = (props) => {
  const [character, setCharacter] = useState([]);

  const getCharacter = async () => {
    const id = document.getElementById("search").value;
    if (id > 0 && id < 827) {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const list = await res.json();

      setCharacter([list]);
    } else {
      document.getElementById("search").value = "";
      document.getElementById("search").placeholder =
        "Nenhum Personagem encontrado";
      setCharacter([]);
    }
  };

  return (
    <div className="search">
      <div className="form">
        <input id="search" type="text" placeholder="ID" />
        <button onClick={getCharacter}>
          <img src={search} alt="search" />
        </button>
      </div>
      {character.map((e) => {
        return <Card key={e.id} image={e.image} name={e.name} />;
      })}
    </div>
  );
};

export default Search;

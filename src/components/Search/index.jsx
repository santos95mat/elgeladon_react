import search from "../../assets/images/search.png";
import { useState } from "react";
import Card from "../Card";
import "./style.css";

const Search = (props) => {
  const [character, setCharacter] = useState([]);
  const [input, setInput] = useState("");

  const getCharacter = async () => {
    if (input > 0 && input < 827) {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${input}`
      );
      const list = await res.json();

      setCharacter([list]);
    } else {
      setCharacter([]);
    }
  };

  const handleSubmit = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="search">
      <div className="form">
        <input
          id="search"
          value={input}
          onChange={handleSubmit}
          type={"text"}
          placeholder="Digite o valor"
        />
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

import Card from "../Card";
import { useState, useEffect } from "react";
import "./style.css";
import search from "../../assets/images/search.png";

const Home = (props) => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const getCharacters = async () => {
    const res = await fetch(url);
    const list = await res.json();

    setCharacters([...characters, ...list.results]);
    setUrl(list.info.next);
  };

  console.log(characters);

  useEffect(() => {
    if (url !== null) {
      getCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div>
      <h2>Pesquisar Personagem por ID</h2>
      <div className="search">
        <input type="text" />
        <button>
          <img src={search} alt="search" />
        </button>
      </div>
      <h2>Lista de Personagens</h2>
      <div className="cards">
        {characters.map((e) => {
          return <Card key={e.id} image={e.image} name={e.name} />;
        })}
      </div>
    </div>
  );
};

export default Home;

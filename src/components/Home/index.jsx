import Card from "../Card";
import { useState, useEffect } from "react";
import "./style.css";
import Search from "../Search";

const Home = (props) => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const getCharacters = async () => {
    const res = await fetch(url);
    const list = await res.json();

    setCharacters([...characters, ...list.results]);
    setUrl(list.info.next);
  };

  useEffect(() => {
    if (url !== null) {
      getCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div>
      <h2>Pesquisar Personagem por ID</h2>
      <Search />
      <h2>Lista de Personagens</h2>
      <div className="cards">
        <Card characters={characters} />;
      </div>
    </div>
  );
};

export default Home;

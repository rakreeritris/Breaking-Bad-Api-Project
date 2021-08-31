import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/ui/Header";
import axios from "axios";
import CharacterGrid from "./Components/characters/CharacterGrid";
import Search from "./Components/ui/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setquery] = useState("");
  console.log(query);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header></Header>
      <Search getQuery={(q) => setquery(q)}></Search>
      <CharacterGrid items={items} isLoading={isLoading}></CharacterGrid>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import logo from "./assets/react.svg";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay.jsx";
import Form from "./components/Form.jsx";

export default function App() {
  // Constant with your API Key
  const apiKey = "c585bee0";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  const getMovie = async(searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch(e) {
      console.error(e)
    }
  }

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
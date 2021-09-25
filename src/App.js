import React, { useState } from "react";
import "./App.css";

const moviesDB = {
  action: [
    {
      name: "Avengers EndGame",
      description: "This is a dummy description",
      rating: "4/5",
    },
    {
      name: "Justice League",
      description: "This is a dummy description",
      rating: "4.5/5",
    },
    {
      name: "Tenet",
      description: "This is a dummy description",
      rating: "5/5",
    },
    {
      name: "Man Of Steel",
      description: "This is a dummy description",
      rating: "4.5/5",
    },
  ],
  horror: [
    {
      name: "Constantine",
      description: "This is a dummy description",
      rating: "4/5",
    },
    {
      name: "Conjuring",
      description: "This is a dummy description",
      rating: "4/5",
    },
    {
      name: "Conjuring2",
      description: "This is a dummy description",
      rating: "3.5/5",
    },
  ],
  Comedy: [
    {
      name: "Knocked Up",
      description: "This is a dummy description",
      rating: "3.5/5",
    },
    {
      name: "The Dictator",
      description: "This is a dummy description",
      rating: "4.5/5",
    },
    {
      name: "Crazy, Stupid, Love",
      description: "This is a dummy description",
      rating: "4/5",
    },
    {
      name: "Palm Springs",
      description: "This is a dummy description",
      rating: "4.5/5",
    },
  ],
};

export default function App() {
  const [genre, setGenre] = useState("action");
  function handleClickGenre(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎥🎦🎬 Good Movies 📽🎞🍿 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            onClick={() => handleClickGenre(genre)}
            style={{
              cursor: "pointer",
              background: "gray",
              color: "white",
              borderRadius: "0.4rem",
              padding: "0.8rem  1.5rem",
              margin: "0.5rem 0.3rem",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul>
          {moviesDB[genre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "400px",
                margin: "0.5rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "larger" }}> {movie.description} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        <p>Shaksham</p>
        <a href="https://github.com/shaksham08">
          Github&nbsp; <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/shaksham-sinha-788a19190/">
          linkedin&nbsp; <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://shakshamportfolio.netlify.app/">
          Portfolio&nbsp; <i class="fa-solid fa-house"></i>
        </a>
      </footer>
    </div>
  );
}

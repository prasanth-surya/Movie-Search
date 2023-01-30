import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import SearchMovies from "./searchMovies";

export default function Main(){
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies/>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />)
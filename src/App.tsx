import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Books from "./components/books";
import Authors from "./components/authors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navContainer">
          <nav className="nav">
            <Link to="/">Counter</Link>
            <Link to="books">Books</Link>
            <Link to="authors">Authors</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

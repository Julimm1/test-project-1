import React from "react";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>}></Route>
        <Route path="/about" element={<h1>About page</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;

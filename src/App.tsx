import React from "react";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Başlamaya hazır...</h1>
      <Button variant="primary">Primary</Button>

      <Header />
    </div>
  );
}

export default App;

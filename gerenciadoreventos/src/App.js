import React from 'react';
import { render } from 'react-dom';
import Header from "./components/Header";
import "./styles.css";
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

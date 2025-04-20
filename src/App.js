import './App.css';
import Compclass from './Compclass.js';
import React from 'react';
import Clicked from './Clicked.js';
import Username from './Username.js'; // Import the new component
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StateWithClass, WithoutConstructor } from "./statewithclass.js"; // Import the new component
// Without JSX
function Fruit() {
  return React.createElement('h1', null, 'Apple');
}

// With JSX
function Education() {
  return <h1>Msc.(IT)</h1>;
}

function Color() {
  return <h1>Pink</h1>;
}

function Home() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Compclass />
      {Color()}
      {Fruit()}
      {<Education />}
      {<Clicked />}
      <Link to="/username"><button>Go to Username Page</button></Link>
    </div>
  );
}

function App() {

  return (
    <Router>
      {/* <WithoutConstructor /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/username" element={<Username />} />
        <Route path="/state" element={
          <>
            <StateWithClass />
            <WithoutConstructor />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;

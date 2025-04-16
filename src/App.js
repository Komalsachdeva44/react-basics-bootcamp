import logo from './logo.svg';
import './App.css';
import Compclass   from './Compclass.js';
import React from 'react';
import Clicked from './Clicked.js';
// One way to show without jsx only react.createElement
function Fruit(){
  return React.createElement('h1',null,'Apple')
}
// Another way to show with jsx
function Education(){
  return <h1>Mac.(IT)</h1>
}
function App() {
  function Color(){
    return(<h1>Pink</h1>)
  }
  return (
    <div className="App">
     <h1>Hello World !</h1>
     <Compclass />
     {/* <User /> */}
    {Color()}
    {Fruit()}
    {<Education />}
    { <Clicked /> }
    </div>
  );
}

export default App;
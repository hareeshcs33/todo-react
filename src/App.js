import React, {component} from 'react'
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Greet name="Hareesh" lastName="Sapparad">
        <p>sub text</p>
      </Greet>
      <Greet name="Nivas" lastName="BJ">
        <button>Action</button>
      </Greet>
      <Greet name="Raviraj" lastName="M"></Greet>
      <Welcome name="John" lastName="Doe"></Welcome>
      <Hello></Hello>
      <Message></Message>
    </div>
  );
}

export default App;

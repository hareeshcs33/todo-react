import React, {component} from 'react'
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'
import FunctionClick from './components/functionClick'
import ClassClick from './components/classClick'
import EventBind from './components/eventBind'
import ParentComponent from './components/parentComponent'
import UserGreeting from './components/userGreeting'

function App() {
  return (
    <div className="App">
      <UserGreeting></UserGreeting>
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <Counter></Counter>
      <Greet name="Hareesh" lastName="Sapparad"></Greet>
      <Greet name="David" lastName="BJ"></Greet>
      <Greet name="Maxwel" lastName="M"></Greet>
      <Welcome name="John" lastName="Doe"></Welcome>
      <Hello></Hello>
      <Message></Message> */}
    </div>
  );
}

export default App;

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
import NameList from './components/nameList'
import Stylesheet from './components/stylesheet'
import Inline from './components/inline'
import './components/appStyles.css'
import styles from './components/appStyles.module.css'

function App() {
  return (
    <div className="App">
      {/* <Stylesheet primary={true}></Stylesheet> */}
      <Inline></Inline>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
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

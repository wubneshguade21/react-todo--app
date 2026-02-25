import { useState } from 'react'
import './App.css';
import List from "./Component/List";
import "bootstrap/dist/css/bootstrap.css";
// import FullName from "./Component/props";
// import Eventbinding from "./Component/Eventbinding";
// import UsestateCounter from "./Hook/usestate";
// import UseStateCounter1 from './Hook/useStateCounter';

function App() {
 
  return (
    <>
    <div className="App">
  {/*<UseStateCounter1/>
      <UsestateCounter/>
      <Eventbinding/>
      <FullName name="Abebe" age="23"/>
      <FullName name="nahom" age="45"/>
      <FullName name="friwot " age="34"/>*/}
    
      <List/>



    </div>
        
    </>
  )
}

export default App

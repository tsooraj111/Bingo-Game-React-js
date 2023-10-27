import './App.css';
import Header from "./component/Header/Header";
import Table from "./component/Table/Table";
import { useState } from 'react';

const App = ()=> {
  const[open,setOpen]=useState(false);
  const onHandle=()=>{
    setOpen(true)
  }
  return (
    <div className="App">
      <button onClick={onHandle} className={(open===true)?"open1":"open2"} id='new'>New Game</button>
      <div className={(open===false)?"open1":"open2"}>
        <Header/>
        <Table/>
      </div>
    </div>
  );
}

export default App;

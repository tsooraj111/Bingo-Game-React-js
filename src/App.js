import './App.css';
import Table from "./component/Table/Table";
import { useState } from 'react';
import img2 from "./component/images/img2.png"

const App = ()=> {
  const[open,setOpen]=useState(false);
  const onHandle=()=>{
    setOpen(true)
  }
  return (
    <div className="App">
      <div className='parent'>
      <img src={img2} alt="photo" />
      <button onClick={onHandle} className={(open===true)?"open1":"open2"} id='new'>New Game</button>
      <div className={(open===false)?"open1":"open2"}>
        <Table/>
      </div>
      </div>
    </div>
  );
}

export default App;

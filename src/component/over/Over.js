import React,{useRef} from 'react'
import "./Over.css"
import win from "../images/you-win.png";

export default function Over() {
  return (
    <div className='item'>
       <div className='game-over'>
            <img src={win} alt="you-win" />
            <button onClick={()=>{window.location.reload(false)}}>OK</button>
        </div>
    </div>
  )
}

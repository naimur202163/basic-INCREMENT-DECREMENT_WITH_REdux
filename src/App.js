import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './action/index';
function App() {

  const myState=useSelector((state)=>state.changeTheNumber
  );
  const dispatch=useDispatch()
  return (
    <div>

      <button  onClick={()=>dispatch(decNumber())}>INCREMENT</button>
      <input type="number" value={myState}/>
      <button onClick={()=>dispatch(incNumber())} >DECREMENT</button>

    </div>
  )
}

export default App
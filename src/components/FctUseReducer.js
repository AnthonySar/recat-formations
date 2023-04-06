import React, { useReducer } from "react";

const initialState = {count1: 0, count2: 0};

const reducer = (state, action) => {
  switch(action.type) {
    case "increment": 
      return {...state, count1: state.count1 + action.value}
    case 'decrement':
      return {...state, count1: state.count1 - action.value}
    case "increment2": 
      return {...state, count2: state.count2 + action.value}
    case 'decrement2':
      return {...state, count2: state.count2 - action.value}
    case 'reset':
      return initialState

    default:
        return state
  }
}

const FctUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <h2>HOOKS : useReducer</h2>
    <div className="row">
      <div className="col-6">
        <p>{count.count1}</p>
        <button className="btn btn-primary m-3" onClick={() => dispatch({type: 'increment', value: 1})}>+</button>
        <button className="btn btn-danger m-3" onClick={() => dispatch({type: 'decrement', value: 1})}>-</button>
      </div>

      <div className="col-6">
        <p>{count.count2}</p>
        <button className="btn btn-primary m-3" onClick={() => dispatch({type: 'increment2', value: 5})}>+</button>
        <button className="btn btn-danger m-3" onClick={() => dispatch({type: 'decrement2', value: 5})}>-</button>
      </div>

      <div className="w-100 mx-0 mb-3">
        <button className="btn btn-success" onClick={() => dispatch({type: 'reset'})}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default FctUseReducer;
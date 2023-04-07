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
    <p>L'idée ici est d'utiliser le switch/case du hook sur les "action.type"</p>
    <div className="row">
      <div className="col-6">
        <div className="progress">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width : count.count1}}></div>
        </div>
        <button className="btn btn-primary m-3" onClick={() => dispatch({type: 'increment', value: 30})}>+</button>
        <button className="btn btn-danger m-3" onClick={() => dispatch({type: 'decrement', value: 30})}>-</button>
      </div>

      <div className="col-6">
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width : count.count2}}></div>
        </div>
        <button className="btn btn-primary m-3" onClick={() => dispatch({type: 'increment2', value: 20})}>+</button>
        <button className="btn btn-danger m-3" onClick={() => dispatch({type: 'decrement2', value: 20})}>-</button>
      </div>

      <div className="w-100 mx-0 mb-3">
        <button className="btn btn-success" onClick={() => dispatch({type: 'reset'})}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default FctUseReducer;
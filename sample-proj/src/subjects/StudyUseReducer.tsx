import { useReducer } from "react";


function StudyUseReducer() {
  const  [ state, dispatch ] = useReducer((state: any, action: any) => {
    switch(action.type) {
      case "SET_NAME":
        return {...state, name: action.payload}
    }
  }, {
    names: [],
    name: "",
  })
  return ( 
    <div>
      <input 
        type="text"
        value={state.name}
        onChange={e => dispatch({ type: 'SET_NAME', payload: e.target.value })}
      />
    </div>
  )
}

export default StudyUseReducer;
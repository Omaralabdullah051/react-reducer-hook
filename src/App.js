import './App.css';
// import Counter from './components/Counter3';
// import ComplexCounter from './components/ComplexCounter';
// import ComplexCounter2 from './components/ComplexCounter2';
// import ComplexCounter3 from './components/ComplexCounter3';
// import Counter3 from './components/Counter3';
import ComponentA from './components/ComponentA';
import GetPost from './components/GetPost';
import React, { useReducer } from 'react';
import GetPost2 from './components/GetPost2';

export const CounterContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <ComplexCounter></ComplexCounter> */}
      {/* <ComplexCounter2></ComplexCounter2> */}
      {/* <ComplexCounter3></ComplexCounter3> */}
      {/* <Counter3></Counter3> */}


      <CounterContext.Provider value={{ counter: count, countDispatch: dispatch }}>
        <ComponentA />
      </CounterContext.Provider>

      <GetPost></GetPost>
      <GetPost2></GetPost2>
    </div>
  );
}

export default App;

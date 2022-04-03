//Here we again take state and action as an object. The benefit of making our state and action as an object is : we can take more state and more action in a single object.

import React, { useReducer } from 'react';

const initialState = {
    counter: 0,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + action.value };
        case 'decrement':
            return { counter: state.counter - action.value };
        default:
            return state;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count {count.counter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increament by 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increament by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decreament by 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decreament by 5</button>
        </div>
    );
};

export default Counter;
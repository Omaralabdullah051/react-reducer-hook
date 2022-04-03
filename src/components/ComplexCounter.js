//Another way to use useRecuder hook. Just the difference is : state and action is now an object.

import React, { useReducer } from 'react';

const initialState = {
    counter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + 1 };
        case 'decrement':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count {count.counter}</div>
            <button onClick={() => dispatch({ type: 'increment' })}>Increament</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decreament</button>
        </div>
    );
};

export default Counter;
import React, { useReducer } from 'react';

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

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count {count}</div>
            <button onClick={() => dispatch('increment')}>Increament</button>
            <button onClick={() => dispatch('decrement')}>Decreament</button>
        </div>
    );
};

export default Counter;
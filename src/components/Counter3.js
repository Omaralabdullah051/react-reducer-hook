//An easy pattern to use local state in the component without making our state and action as an object. We can easily declare another useReducer hook and works on it.

import React, { useReducer } from 'react';

const initialState = 0;
const initialState2 = 5;

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
    const [count2, dispatch2] = useReducer(reducer, initialState2);
    return (
        <div>
            <div>
                <div>Count {count}</div>
                <button onClick={() => dispatch('increment')}>Increament</button>
                <button onClick={() => dispatch('decrement')}>Decreament</button>
            </div>
            <div>
                <div>Count {count2}</div>
                <button onClick={() => dispatch2('increment')}>Increament</button>
                <button onClick={() => dispatch2('decrement')}>Decreament</button>
            </div>
        </div>
    );
};

export default Counter;
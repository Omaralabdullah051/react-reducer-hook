//when we need to work on two or more states,we need to spread out our state(...state)

import React, { useReducer } from 'react';

const initialState = {
    counter: 0,
    counter2: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.value };
        case 'decrement':
            return { ...state, counter: state.counter - action.value };
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value };
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value };
        default:
            return state;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
                <div>Count {count.counter}</div>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increament by 1</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decreament by 1</button>
            </div>
            <div>
                <div>Count {count.counter2}</div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increament2 by 1</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decreament2 by 1</button>
            </div>
        </div>
    );
};

export default Counter;
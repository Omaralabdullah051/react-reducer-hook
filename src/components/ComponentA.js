//Here component A is using global state. state and dispatch function is exist in App component.

import React, { useContext } from 'react';
import { CounterContext } from '../App';

const ComponentA = () => {
    const { counter, countDispatch } = useContext(CounterContext);
    return (
        <div>
            <p>Component A</p>
            <div>Count {counter}</div>
            <button onClick={() => countDispatch('increment')}>Increament</button>
            <button onClick={() => countDispatch('decrement')}>Decreament</button>
        </div>
    );
};

export default ComponentA;
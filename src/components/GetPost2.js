//Get the post by useReducer and useEffect hook 

//useReducer hook is useful for large application.
//The benefit is all the logics are exists in reducer function.So, In a large bussiness application, it is much more useful because all of our bussiness logic will be exist in reducer function.All about it's a beautiful pattern. But in a small aplication useState is too much easy and useful.

import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Success':
            return {
                loading: false,
                post: action.result,
                error: ''
            }
        case 'Error':
            return {
                loading: false,
                post: {},
                error: 'There was a problem fetching'
            }
        default:
            return state
    }
}

const GetPost2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'Success', result: data });
            })
            .catch(() => {
                dispatch({ type: 'Error' })
            })
    }, [])

    return (
        <div>
            {state.loading ? 'Loading....' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
};

export default GetPost2;
//////////////////////////useReducer() hook/////////////////////////////


//useReducer() hook is another react hook that is used for state management.
//but we somehow know that useState() is a state hook and it is commonly used for managing state.


//useState() and UseReducer() hook:
//useState() hook is created based on useReducer() hook.
//useReducer() hook is the alternative of useState() hook.
//It allows for custom state logic.
//If we find ourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.



//reduce vs useReducer()
//array.reduce(reducer,initialValue) || //useReducer(reducer,initialState)
//singleReturnValue = reducer(accumulator,itemValue) || //newState = reducer(currentState,action)
//returns a single value || //returns a tuple -[newState,dispatch]

//so,useReducer() is a mechanism of changing state.



////////When we can useReducer and useState hook :
//State Change number-- // if two or three states || //multiple states
//multiple state change are related --      // no || //yes
//state data type --      //string,Number,boolean || //object,array
//complex logic --                           //no || //yes
//state scope --                    //local state || //global state



////////Last and Final central theme of the concept is:
//useReducer hook is useful for large application.
//The benefit is all the logics are exists in reducer function.So, In a large bussiness application, it is much more useful because all of our bussiness logic will be exist in reducer function.All about it's a beautiful pattern. But in a small aplication useState is too much easy and useful.

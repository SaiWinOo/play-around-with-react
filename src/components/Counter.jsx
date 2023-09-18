import React, {useReducer, useState} from 'react';

const initialState = {
    count: 0
};

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'RESET':
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
};

const useCustomReducer = (reducer, initialState) => {
    const [state,setState] = useState(initialState);
    function dispatch(action){
        let nextState = reducer(state,action);
        setState(nextState);
    }
    return [state,dispatch];
};

const Counter = () => {

    const [state, dispatch] = useCustomReducer(counterReducer, initialState);

    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={()=> dispatch({type : 'INCREMENT'})}>Increment</button>
            <button onClick={()=> dispatch({type : 'DECREMENT'})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'RESET'})}>Reset</button>
        </div>
    );
};

export default Counter;
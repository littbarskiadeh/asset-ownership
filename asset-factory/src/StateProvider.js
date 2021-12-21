import React, { useContext, useReducer, createContext } from 'react';

// create a context
export const StateContext = createContext();

// declare a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// declare a consumer 
export const useStateValue = () => useContext(StateContext);
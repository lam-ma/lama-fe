import React, {createContext, useReducer} from 'react';
import {State} from "../types/State";
import {reducer} from "./reducer";


const AppContext = createContext<{
    state: State;
    dispatch: React.Dispatch<any>;
}>({
    state: {},
    dispatch: () => null
});

const AppProvider: React.FC = ({children}) => {
    const tuple = useReducer<any>(reducer, {});
    const state: State = tuple[0] as State;
    const dispatch = tuple[1];

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};
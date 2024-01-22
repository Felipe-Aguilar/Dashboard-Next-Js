import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = ( state: MiddlewareAPI ) => {
    return (next : Dispatch)  => (action: Action) =>{
        next(action);

        if (action.type === 'wizards/toggleFavorite') {
            const { wizards } = state.getState() as RootState;
            localStorage.setItem('favorite-wizards' , JSON.stringify( wizards ));

            return;
        }
    }
}
import { Action, Dispatch, MiddlewareAPI, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from ".."; // <-- :O


export const localStorageMiddleware = (state:MiddlewareAPI) => {
    return (next:Dispatch ) => (action: Action) => {
       next(action);
       if(action.type === 'pokemons/toggleFavorite'){
        const { pokemons } = state.getState() as RootState;
            localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons.favorites));
            return;
       }
    }
}
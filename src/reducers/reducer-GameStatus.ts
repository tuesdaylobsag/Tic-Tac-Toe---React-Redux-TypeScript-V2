import * as types from "../actions/actionsTypes";
import initialState from "./initialState";

export default function gameReducer(state = initialState, action:any){
    switch (action.type) {
        case  types.LOAD_GAMESTARTED_SUCCESS:
            return(
                state = {
                   ...state,
                   game: action.payload,
                   gameVariables: [...state.gameVariables, action.payload] 
                }
            );
               
        case  types.BACKBTN_CLICKED_SUCCESS:
        return(
            state = {
                ...state,
                game: action.payload,
                gameVariables: [...state.gameVariables, action.payload] 
            }
        );

        default:
            return state;
    }
}
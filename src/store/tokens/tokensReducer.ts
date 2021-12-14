import {Action } from './actions';

//model
export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ""
} //definindo para o state um valor inicial e o valor inicial é um valor vazio.

//variavel do tipo da model   //atribuindo a constante initialState
export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type) {
        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }

        default:
            return state
    }
}
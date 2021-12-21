import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 };

export const contadorReducer = (state, action) => {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };
        case TYPES.RESET:
            return { contador: action.payload };
        default:
            return state;
    }
};
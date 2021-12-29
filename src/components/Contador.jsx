import { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import {
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";

export const Contador = () => {
  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState);

  const sumar = (_) => dispatch({ type: TYPES.INCREMENT });
  const restar = (_) => dispatch({ type: TYPES.DECREMENT });
  const reset = (_) => dispatch({ type: TYPES.RESET, payload: 0 });

  return (
    <div>
      <h3>Contador Reducer</h3>

      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>Reset</button>
      </nav>

      <h2>{state.contador}</h2>
    </div>
  );
};

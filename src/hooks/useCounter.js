import { useState } from "react";


const useCounter = (initialState) => {
    const [counter, setCounter] = useState(initialState);

    const increment = _ => {
        setCounter(counter + 1);
    }

    const reset = _ => {
        setCounter(initialState);
    }

    return [counter, increment, reset]
}

export default useCounter
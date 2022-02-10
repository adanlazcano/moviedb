import useCounter from "../../hooks/useCounter"

const CounterCustom = () => {
    const [counter,increment,reset] = useCounter(1);
  return (
      <>
    <div>{counter}</div>
    <div>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default CounterCustom
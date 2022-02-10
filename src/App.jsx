import styles from "./App.module.css";
import { useRef } from "react";
import useChangeBg from "./hooks/useChangeBg";
import Mouse from "./components/customs/Mouse";
// import Todo from "./components/customs/Todo";
// import Counter from "./components/customs/CounterCustom";
// import { Contador } from "./components/Contador";
// import ShoppingCart from "./components/ShoppingCart";
// import Teoria from './components/Teoria';

function App() {
  const refColor = useRef();
   useChangeBg(refColor);

 
  return (
    <div ref={refColor} className={styles["App"]}>
      <header className={styles["App-header"]}>
        <Mouse />
      </header>
    </div>
  );
}

export default App;

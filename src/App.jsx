import styles from "./App.module.css";
// import { Contador } from "./components/Contador";
import ShoppingCart from "./components/ShoppingCart";
// import Teoria from './components/Teoria';

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["App-header"]}>
        <ShoppingCart/>
      </header>
    </div>
  );
}

export default App;

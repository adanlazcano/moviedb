import styles from "./App.module.css";
import { Contador } from "./components/Contador";
// import Teoria from './components/Teoria';

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["App-header"]}>
        <Contador />
      </header>
    </div>
  );
}

export default App;

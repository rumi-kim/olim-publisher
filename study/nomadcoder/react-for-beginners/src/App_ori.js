import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!</h1>
      <button className={styles.btn}>button</button>
      <Button text={"Continue..."}/>
    </div>
  );
}

export default App;

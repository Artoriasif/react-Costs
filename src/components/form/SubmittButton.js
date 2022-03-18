import styles from "./SubmittButton.module.css";

function Input({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default Input;

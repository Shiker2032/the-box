import styles from './Button.module.css';

export const BtnColor = {blue: styles.blue, transparent: styles.transparent, orange: styles.orange, arrow: styles.arrow, disabled: styles.disabled};

const Button = ({ text, color, handleClick }) => {
  const style = `${styles.button} ${color}`

  return <button onClick={handleClick} className={style}>{text}</button>;
};

export default Button;

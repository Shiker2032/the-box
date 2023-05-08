import styles from './Button.module.css';

export const BtnColor = {blue: styles.blue, transparent: styles.transparent, orange: styles.orange, arrow: styles.arrow};

const Button = ({ text, color }) => {
  const style = `${styles.button} ${color}`

  return <button className={style}>{text}</button>;
};

export default Button;

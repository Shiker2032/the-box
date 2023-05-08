import Button, { BtnColor } from './Button';
import styles from './Consultation.module.css';

const Consultation = () => {
  return (
    <section className={`${styles.consultation}`}>
      <div className={styles.overlay}>
        <div className={styles.left}>
          <h2>Free Consultation With Exceptional Quality</h2>
          <p>
            Just one call away <a href=""> +84 1102 2703</a>
          </p>
        </div>
        <Button color={BtnColor.transparent} text={'Get your consultation'} />
      </div>
    </section>
  );
};

export default Consultation;

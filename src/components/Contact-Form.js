import Button, { BtnColor } from '../components/utils/Button';
import styles from './Contact-form.module.css';

const ContactForm = () => {
  return (
    <section className={`${styles.contactForm}`}>
      <div className={styles.title}>
          <h2>What can us do for you ?</h2>
          <p>
            We are ready to work on a project of any complexity, whether it's
            commercial or residential.
          </p>
      </div>
      <form className={styles.form}>
        <div className={styles.content}>
          <div className={styles.upper}>
            <div className={`${styles.column}`}>
              <input placeholder="Your Name" />
              <input placeholder="Reason to contacting" />
            </div>
            <div className={`${styles.column}`}>
              <input placeholder="Email" />
              <input placeholder="Phone" />
            </div>
          </div>
          <div className={styles.bottom}>
            <input placeholder="message" />
            <span>* indicates a required field</span>
            <Button text={"Sumbit"} color={BtnColor.blue}/>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

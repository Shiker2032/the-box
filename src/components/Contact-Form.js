import Button, { BtnColor } from '../components/utils/Button';
import styles from './Contact-form.module.css';


const ContactForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
   const form = evt.target;
   const formData =  Object.fromEntries(new FormData(form));
   console.log(formData);    
  }

  return (
    <section className={`${styles.contactForm}`}>
      <div className={styles.title}>
          <h2>What can us do for you ?</h2>
          <p>
            We are ready to work on a project of any complexity, whether it's
            commercial or residential.
          </p>
      </div>
      <form name='contactForm' onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.content}>
          <div className={styles.upper}>
            <div className={`${styles.column}`}>
              <input name='clientName' placeholder="Your Name" />
              <input name='reasonToContact' placeholder="Reason to contacting" />
            </div>
            <div className={`${styles.column}`}>
              <input name='clientEmail' placeholder="Email" />
              <input name='clientPhone' placeholder="Phone" />
            </div>
          </div>
          <div className={styles.bottom}>
            <input name='clientMessage' placeholder="message" />
            <span>* indicates a required field</span>
            <Button text={"Sumbit"} color={BtnColor.blue}/>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

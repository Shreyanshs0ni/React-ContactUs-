import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={styles.contactHeader}>
      <h1>CONTACT US</h1>
      <p>
        LET&apos;S CONNECT : WE&apos;RE HERE TO HELP, AND WE&apos;D LOVE TO HEAR
        FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO HAVE A
        CHAT, YOU CAN REACT OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR
        BY PHONE, EMAIL, OR SOCIAL MEDIA.
      </p>
    </div>
  );
};

export default ContactHeader;

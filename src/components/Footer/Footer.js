import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <h1 className={styles.red}>{props.footerMessage}</h1>
    </footer>
  );
};

export default Footer;

import styles from "./footer.module.css";

const Footer = (props) => {
  const { status } = props;
  return (
    <footer className={styles.footer}>
      <h1 style={{ color: status === "Found!!!" ? "green" : "red" }}>
        {status}
      </h1>
    </footer>
  );
};

export default Footer;

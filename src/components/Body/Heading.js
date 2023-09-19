import styles from "./Heading.module.css";

const Heading = ({ children }) => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.headingText}>{children}</h1>
    </div>
  );
};

export default Heading;

import styles from "./BodyContainer.module.css";

const BodyContainer = ({ children }) => {
  return <main className={styles.bodyContainer}>{children}</main>;
};

export default BodyContainer;

import styles from "./TextDetail.module.css";

const TextDetail = ({ textStyle, children }) => {
  return (
    <li className={styles.textDetail}>
      <p className={`${styles.text} ${textStyle}`}>{children}</p>
    </li>
  );
};

export default TextDetail;

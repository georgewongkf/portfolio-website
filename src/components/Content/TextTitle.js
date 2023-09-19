import styles from "./TextTitle.module.css";

const TextTitle = ({ titleStyle, children }) => {
  return (
    <li className={`${styles.textTitle} ${titleStyle}`}>
      <h2>{children}</h2>
    </li>
  );
};

export default TextTitle;

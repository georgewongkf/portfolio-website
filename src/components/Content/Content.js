import styles from "./Content.module.css";

const Content = ({ pageStyle, children }) => {
  return <div className={`${styles.content} ${pageStyle}`}>{children}</div>;
};

export default Content;

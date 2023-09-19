import styles from "./ContentContainer.module.css";

const ContentContainer = ({ pageStyle, children }) => {
  return (
    <div className={`${styles.contentContainer} ${pageStyle}`}>{children}</div>
  );
};

export default ContentContainer;

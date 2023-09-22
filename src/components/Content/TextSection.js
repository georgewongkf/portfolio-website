import styles from "./TextSection.module.css";

const TextSection = ({ sectionStyle, children }) => {
  return (
    <section className={styles.section}>
      <ul className={`${styles.textSection} ${sectionStyle}`}>{children}</ul>
    </section>
  );
};

export default TextSection;

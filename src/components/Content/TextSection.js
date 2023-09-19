import styles from "./TextSection.module.css";

const TextSection = ({ sectionStyle, children }) => {
  return (
    <section>
      <ul className={`${styles.textSection} ${sectionStyle}`}>{children}</ul>
    </section>
  );
};

export default TextSection;

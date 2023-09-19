import styles from "./ImageSection.module.css";

const ImageSection = ({ sectionStyle, children }) => {
  return (
    <section className={`${styles.imageSection} ${sectionStyle}`}>
      {children}
    </section>
  );
};

export default ImageSection;

import styles from "./Image.module.css";

const Image = ({ imageStyle, pageStyle, source, alternative }) => {
  return (
    <div className={imageStyle}>
      <img
        className={`${styles.image} ${pageStyle}`}
        src={source}
        alt={alternative}
      />
    </div>
  );
};

export default Image;

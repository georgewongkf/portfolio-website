import styles from "./Logo.module.css";
import Image from "../../components/Content/Image";
import websiteLogo from "../../assets/images/GWKF.png";

const Logo = () => {
  return (
    <>
      <div className={styles.logo}>
        <Image
          imageStyle={styles.logoImageContainer}
          pageStyle={styles.logoImage}
          source={websiteLogo}
          alternative="websiteLogo"
        />
        <h1 className={styles.logoName}>George, Wong Kwai Fung</h1>
      </div>
    </>
  );
};

export default Logo;

import styles from "./Navigation.module.css";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <NavigationBar />
    </nav>
  );
};

export default Navigation;

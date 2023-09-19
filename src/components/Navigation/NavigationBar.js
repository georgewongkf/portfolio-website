import styles from "./NavigationBar.module.css";
import NavigationItem from "./NavigationItem";

const NavigationBar = () => {
  return (
    <ul className={styles.navigationBar}>
      <NavigationItem path="/">Home</NavigationItem>
      <NavigationItem path="portfolio">Portfolio</NavigationItem>
      <NavigationItem path="experience">Experience</NavigationItem>
      <NavigationItem path="skills">skills</NavigationItem>
      <NavigationItem path="contact">Contact</NavigationItem>
    </ul>
  );
};

export default NavigationBar;

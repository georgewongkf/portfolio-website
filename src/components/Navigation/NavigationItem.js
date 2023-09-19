import styles from "./NavigationItem.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const NavigationItem = ({ icon, path, children }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(path);
  };

  return (
    <li className={styles.navigationItem} onClick={navigateHandler}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;

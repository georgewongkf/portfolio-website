import styles from "./Root.module.css";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <div className={styles.rootContainer}>
        <Navigation />
        <Outlet />
      </div>
    </>
  );
};

export default Root;

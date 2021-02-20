import styles from "./Card.module.scss";
import React from "react";
import { MyContext } from "../App";

export default function Card() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div
          className={context.state.dark ? styles.DarkMode : styles.LightMode}
        >
          <div className={styles.Card}>
            <h1>Theme Toggler</h1>
            <p>Sliding icons - Framer Motion</p>
            <p>Theme State - React useContext</p>
            <p>Dark Mode state - stored globally</p>
            <p> Enjoy!</p>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
}

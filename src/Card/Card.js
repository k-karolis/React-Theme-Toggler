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
            <p>Dark mode / Light mode</p>
            <p>Framer Motion</p>
            <p>React useContext</p>
            <p>Global state</p>

            <p> Enjoy!</p>
            <h3 className={styles.Tag}>Coded by Karolis Kimtys</h3>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
}

import React, { useState } from "react";
import styles from "./App.module.scss";
import { motion } from "framer-motion";
import Sun from "./ToggleIcons/Sun";
import Moon from "./ToggleIcons/Moon";

function App() {
  const duration = 0.6;

  const [darkTheme, setDarkTheme] = useState(false);

  const variants1 = {
    hidden: { opacity: 0, x: 0, transition: { duration: duration } },
    visible: { opacity: 1, x: 25, transition: { duration: duration } },
  };
  const variants2 = {
    hidden: { opacity: 0, x: -25, transition: { duration: duration } },
    visible: { opacity: 1, x: 0, transition: { duration: duration } },
  };

  return (
    <div className={darkTheme ? styles.DarkMode : styles.LightMode}>
      <div className={styles.App}>
        <div
          className={styles.Toggle}
          onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
        >
          {darkTheme ? (
            <motion.div
              className={styles.Icon}
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants1}
            >
              <Moon />
            </motion.div>
          ) : (
            <motion.div
              className={styles.Icon}
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants2}
            >
              <Sun />
            </motion.div>
          )}
        </div>

        <div className={styles.Card}>
          <h1>Theme Toggler</h1>
          <p>
            This will toggle between Light/Dark mode. All parameters can be
            adjusted inside CSS. <br />
            Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

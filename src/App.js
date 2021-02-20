import React, { Component } from "react";
import styles from "./App.module.scss";
import { motion } from "framer-motion";
import Sun from "./ToggleIcons/Sun";
import Moon from "./ToggleIcons/Moon";
import Card from "./Card/Card";

export const MyContext = React.createContext(false);

export class MyProvider extends Component {
  state = {
    dark: false,
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          changeMode: () =>
            this.setState((prevState) => ({ dark: !prevState.dark })),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const App = () => {
  const duration = 0.5;

  const variants1 = {
    hidden: { opacity: 0, x: 0, transition: { duration: duration } },
    visible: { opacity: 1, x: 25, transition: { duration: duration } },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 25, transition: { duration: duration } },
    visible: { opacity: 1, x: 0, transition: { duration: duration } },
  };

  return (
    <MyProvider>
      <MyContext.Consumer>
        {(context) => (
          <div
            className={context.state.dark ? styles.DarkMode : styles.LightMode}
          >
            <div className={styles.App}>
              <div className={styles.Toggle} onClick={context.changeMode}>
                {context.state.dark ? (
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
              <Card />
            </div>
          </div>
        )}
      </MyContext.Consumer>
    </MyProvider>
  );
};

export default App;

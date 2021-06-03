import React, { useEffect } from "react";

import styles from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //Http request can be done here.
    setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup in use effect")
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] second useEffect");
    return () => {
      console.log("[Cockpit.js] second cleanup in use effect")
    };
  });

  const classes = [];
  let btnClass = "";

  if(props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        {props.showPersons ? "Hide Persons" : "Show Persons"}
      </button>
    </div>
  );
};

export default cockpit;

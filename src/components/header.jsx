import React from "react";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <div class={styles.header}>
      <h1 class={styles.appName}>Project Organizer</h1>
      <h3>“Streamlining teamwork, one project at a time.”</h3>
    </div>
  );
}

export default Header;

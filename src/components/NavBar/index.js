import React from "react";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/*" className="nav-item nav-link ml-4">
        Inicio
      </a>
      <a href="/?item=characters" className="nav-item nav-link ml-4">
        Personajes
      </a>
      <a href="/?item=episodes" className="nav-item nav-link ml-4">
        Episodios
      </a>
      <a href="/?item=locations" className="nav-item nav-link ml-4">
        Lugares
      </a>
    </div>
  );
};

export default Navbar;

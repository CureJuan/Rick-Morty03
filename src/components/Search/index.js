import classnames from "classnames";
import { MDBIcon } from "mdbreact";
import React from "react";
import { Form } from "react-bootstrap";
import {
  EPISODES,
  LOCATIONS,
  CHARACTERS,
} from "../../containers/HomeContainer";
import styles from "./Search.module.css";

const Search = ({
  currentItem,
  setCurrentItem,
  setSearch,
  setInputValue,
  inputValue,
  setPage,
}) => {
  const onSelect = (ev) => {
    setCurrentItem(ev.target.value);
    setSearch("");
    setInputValue("");
    setPage(1);
  };

  return (
    <div className={styles.container}>
      <div className="d-ib">
        <select
          className={classnames("browser-default custom-select", styles.select)}
          onChange={onSelect}
        >
          <option value={CHARACTERS} selected={currentItem === CHARACTERS}>
            Personajes
          </option>
          <option value={EPISODES} selected={currentItem === EPISODES}>
            Episodios
          </option>
          <option value={LOCATIONS} selected={currentItem === LOCATIONS}>
            Lugares
          </option>
        </select>
      </div>
      <div className={classnames(styles["input-container"], "d-ib")}>
        <Form.Control
          type="text"
          className={styles.input}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              setSearch(inputValue);
            }
          }}
          onChange={(ev) => setInputValue(ev.target.value)}
          placeholder="Buscar..."
          value={inputValue}
        />
        <MDBIcon
          onClick={() => setSearch(inputValue)}
          className={styles.icon}
          icon="search"
        />
      </div>
    </div>
  );
};

export default Search;

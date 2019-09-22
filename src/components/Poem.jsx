import React, { useContext } from "react";
import { CTX } from "../Store";

const styles = {
  button: {
    padding: "5px 5px",
    marginLeft: "5px",
    marginRight: "5px"
  }
};
const Poem = () => {
  //const [appState, updateState] = useContext(CTX);
  const [appState, dispatch] = useContext(CTX);

  /* function toggle(appState) {
    appState.color =
      appState.color === "red"
        ? updateState({ color: "blue" })
        : updateState({ color: "red" });
  } */

  return (
    <div>
      {/* <button onClick={() => updateState({ color: "blue" })}></button> */}
      {/* <button onClick={() => toggle(appState)></button> */}
      <button
        style={styles.button}
        onClick={() => dispatch({ type: "UPDATE_COLOR", payload: "blue" })}
      >
        Blue
      </button>
      <button
        style={styles.button}
        onClick={() => dispatch({ type: "UPDATE_COLOR", payload: "green" })}
      >
        Green
      </button>
      <button
        style={styles.button}
        onClick={() => dispatch({ type: "UPDATE_COLOR", payload: "red" })}
      >
        Red
      </button>
      <button
        style={styles.button}
        onClick={() => dispatch({ type: "UPDATE_COLOR", payload: "pink" })}
      >
        Pink
      </button>
      Roses are {appState.color}, violets are {appState.color}.
    </div>
  );
};

export default Poem;

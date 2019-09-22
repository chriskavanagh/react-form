import React, { createContext, useReducer } from "react";

export const CTX = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_COLOR":
      return { ...state, color: action.payload };
    default:
      throw Error("Reducer Error");
  }
}

const Store = props => {
  //const stateHook = useState({ color: "red" });
  const stateHook = useReducer(reducer, { color: "red" });

  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
};

export default Store;

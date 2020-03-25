import React, { useReducer } from "react";
import styled from "styled-components";
import Palette from "./Palette";
import Text from "./Text";

const Wrapper = styled.div`
  padding: 1rem;
  font-family: sans-serif;
  text-align: center;
`;

const colors = [
  { pk: 1, color: "#000000" },
  { pk: 2, color: "#ff0000" },
  { pk: 3, color: "#ffff00" },
  { pk: 4, color: "#0000ff" },
  { pk: 5, color: "#7700ff" }
];

const colorState = {
  count: 0,
  selectedColor: " "
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_COLOR":
      return { ...state, selectedColor: action.select.color };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, colorState);

  return (
    <Wrapper>
      <Palette
        colors={colors}
        selectedColor={state.selectedColor}
        dispatch={dispatch}
      />
      <Text
        selectedColor={state.selectedColor}
        count={state.count}
        dispatch={dispatch}
      />
    </Wrapper>
  );
}

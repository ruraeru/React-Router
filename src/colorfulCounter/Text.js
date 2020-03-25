import React from "react";
import styled from "styled-components";
import useInput from "./Hooks";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  text-align: start;
`;

const Input = styled.input`
  width: 20rem;
  font-size: 1rem;
  outline: none;
`;

const Typography = styled.p`
  color: ${({ color }) => color};
  font-size: 2rem;
`;

export default function Text({ selectedColor, count, dispatch }) {
  const [input, setInput] = useInput("");

  return (
    <Wrapper>
      <Input value={input} onChange={setInput} />
      <Typography color={selectedColor}>{input}</Typography>
      <Typography color={selectedColor}>{count}</Typography>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>R</button>
    </Wrapper>
  );
}

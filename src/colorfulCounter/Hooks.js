// 이 파일에 useInput을 작성하세요.
import { useState } from "react";

const useInput = defaultValue => {
  const [input, setInput] = useState(defaultValue);
  const onchange = e => {
    const {
      target: { value }
    } = e;
    setInput(value);
  };
  return [input, onchange];
};

export default useInput;

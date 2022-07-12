import React from "react";
import ColorFullMessage from "./components/ColorFullMessage";

const App = () => {
  const onClickButton = () => alert("ボタン押してますね");
  return (
    <>
      <h1 style={{ color: "#ccc" }}>こんにちは。</h1>
      <ColorFullMessage color="blue">お元気ですか？</ColorFullMessage>
      <ColorFullMessage color="pink">元気です。</ColorFullMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;

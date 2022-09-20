import React from "react";

const App = () => {
  const getRandomWelcomText = () => {
    const welcomeTexts = ["Hello World", "Welcome", "Hi esbuild"];
    return welcomeTexts[Math.ceil(Math.random() * 10) % welcomeTexts.length];
  };

  return (
    <div>
      <h1>fjdisoafjdsio</h1>
      <h1>fjdisoafjdsio</h1>
      <h1>fjdisoafjdsio</h1>
      <h1>fjdisoafjdsio</h1>
      <h1>{getRandomWelcomText()}</h1>
    </div>
  );
};

export default App;

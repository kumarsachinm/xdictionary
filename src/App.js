import "./App.css";
import { useState } from "react";

function App() {
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const foundWord = dictionary.find(
      (item) => item.word.toLowerCase() === input.toLowerCase()
    );
    if (foundWord) {
      setAnswer(foundWord.meaning);
    } else {
      setAnswer("Word not found in the dictionary.");
    }
    // setInput("");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form>
        <input
          type="text"
          placeholder="Search for a word..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" onClick={handleSearch} value="Search" />
      </form>
      <h4>Definition:</h4>
      <p>{answer}</p>
    </div>
  );
}

export default App;

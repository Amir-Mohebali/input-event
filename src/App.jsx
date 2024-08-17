import { useState } from "react";
import './main.css'

function App() {
  const [text, setText] = useState('')
  const [charCounter, setCharCounter] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    // const chars = value.split(" ").join('');
    const chars = value.replace(/\s/g,'');
    setText(value);
    setCharCounter(chars.length);
  }

  return (
    <div className="app">
      <form>
        <textarea 
          cols="20"
          rows="4"
          value={text}
          onChange={handleChange}
        >
        </textarea>

        <h4>Character Count: {charCounter}</h4>
        <span><b>Note:</b> whitespace is ignored</span>
      </form>
    </div>
  )
}

export default App

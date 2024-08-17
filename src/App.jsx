import { useState } from "react";
import './main.css'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="app">
      <form>
        <textarea 
          cols="20"
          rows="4"
          value={text}
          onChange={(e)=> setText(e.target.value)}
        >
        </textarea>

        <h4>Character Count: </h4>
      </form>
    </div>
  )
}

export default App

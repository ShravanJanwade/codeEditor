import React from "react"
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import CodeEditor from "./CodeEditor"
function App() {

  return (
    <div >
      <h1>Hello World</h1>
      <CodeEditor/>
    </div>
  )
}

export default App

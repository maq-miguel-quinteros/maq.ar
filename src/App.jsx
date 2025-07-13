import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Technological from "./pages/Technological"
import Artistic from "./pages/Artistic"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Technological/>} />
          <Route path="/artistico" element={<Artistic />}/>
        </Routes>
      </Router>
    </>
    
  )  
}

export default App

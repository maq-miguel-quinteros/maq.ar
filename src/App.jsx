import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Technological from "./pages/Technological"
import Artistic from "./pages/Artistic"
import Birthday from "./pages/Birthday"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Technological/>} />
          <Route path="/artistico" element={<Artistic />}/>
          <Route path="/artistico/libros/03" element={<Artistic />}/>
          <Route path="/cumple40" element={<Birthday />}/>
        </Routes>
      </Router>
    </>
    
  )  
}

export default App

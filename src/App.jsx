import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Technological from "./pages/Technological"
import Artistic from "./pages/Artistic"
import Artistic_book03 from "./pages/Artistic_book03"
import Hector60 from "./pages/Hector60"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Technological/>} />
          <Route path="/artistico" element={<Artistic />}/>
          <Route path="/artistico/libros/03" element={<Artistic />}/>´
          <Route path="/hector60" element={<Hector60 />}/>
        </Routes>
      </Router>
    </>
    
  )  
}

export default App

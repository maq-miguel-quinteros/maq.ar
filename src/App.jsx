import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/libros/03" element={<p>Aquí vamos a poner información respecto del libro</p>}/>
        </Routes>
      </Router>
    </>
    
  )  
}

export default App

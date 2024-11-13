import { useState } from "react"
import HeaderLeft from "./pages/HeaderLeft"
import Home from "./pages/Home"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
    document.documentElement.classList.toggle('dark', !darkMode)
  }

  return (
    <div className={`main-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased 
    ${darkMode?"bg-black":"bg-white"}`}>
      <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
    </div>
  )
}

export default App

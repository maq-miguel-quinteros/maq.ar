import { useEffect, useState } from "react"
import HeaderLeft from "./pages/HeaderLeft"
import Home from "./pages/Home"

function App() {
  // window.matchMedia... devuelve true si el tema del sistema (windows, android) es dark
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  
  useEffect(()=>{
    // cambia el tema general de la página a dark si darkMode=true
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)    
  }

  return (
    <div className={`main-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased 
    ${darkMode?"bg-zinc-950":"bg-zinc-50"}`}>
      <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
    </div>
  )
}

export default App

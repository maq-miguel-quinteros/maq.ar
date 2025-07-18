import { useEffect, useState } from "react"
import TechnologicalLeft from "../components/templates/TechnologicalLeft"
import TechnologicalBody from "../components/templates/TechnologicalBody"

function Technological() {
    // window.matchMedia... devuelve true si el tema del sistema (windows, android) es dark
    const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

    useEffect(() => {
        // cambia el tema general de la página a dark si darkMode=true
        document.documentElement.classList.toggle('dark', darkMode)
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className={`main-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased 
    ${darkMode ? "bg-zinc-950" : "bg-zinc-50"}`}>
            <TechnologicalLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <TechnologicalBody />
        </div>
    )
}

export default Technological
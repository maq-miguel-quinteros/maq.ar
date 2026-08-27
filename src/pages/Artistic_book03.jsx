import { useEffect, useState } from "react"
import ArtisticLeft from "../components/templates/ArtisticLeft_book03"
import ArtisticBody from "../components/templates/ArtisticBody_book03"

function Artistic_book03() {
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
    ${darkMode ? "bg-sky-950" : "bg-sky-50"}`}>
            <ArtisticLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <ArtisticBody />
        </div>
    )
}

export default Artistic_book03
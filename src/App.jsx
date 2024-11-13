import HeaderLeft from "./pages/HeaderLeft"
import Home from "./pages/Home"

function App() {

  return (
    <div className="main-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased bg-white">
      <HeaderLeft />
      <Home />
    </div>
  )
}

export default App

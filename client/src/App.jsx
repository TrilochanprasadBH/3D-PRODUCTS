import Home from "./pages/Home"
import Customiser from "./pages/Customiser"
import Canvas from "./canvas"

function App() {
  

  return (
    <main className="app transition-all ease-in">
      {/* <p className='head-text'>Three JS</p> */}
      {/* we are using tailwind css hence classname = properties here act as css code, head-text gives big text */}
      <Home/>
      <Canvas/>
      <Customiser/>
    </main>
  )
}

export default App

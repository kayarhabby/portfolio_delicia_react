import './assets/css/App.css'
import Navbar from "./assets/components/Navbar.jsx";
import Header from "./assets/components/Header.jsx";
import About from "./assets/components/About.jsx";
import Resume from "./assets/components/Resume.jsx";

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Resume />
    </div>
  )
}

export default App

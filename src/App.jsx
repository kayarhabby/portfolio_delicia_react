import './assets/css/App.css'
import Navbar from "./assets/components/Navbar.jsx";
import Header from "./assets/components/Header.jsx";
import About from "./assets/components/About.jsx";
import Education from "./assets/components/Education.jsx";
import Footer from "./assets/components/Footer.jsx";
import Quotes from "./assets/components/Quotes.jsx";

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Quotes />
      <Footer />
    </div>
  )
}

export default App

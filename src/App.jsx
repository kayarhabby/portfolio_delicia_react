import './assets/css/App.css'
import Navbar from "./assets/components/Navbar.jsx";
import Header from "./assets/components/Header.jsx";
import About from "./assets/components/About.jsx";
import Education from "./assets/components/Education.jsx";
import Footer from "./assets/components/Footer.jsx";
import Quotes from "./assets/components/Quotes.jsx";
import Competences from "./assets/components/Competences.jsx";
import Experience from "./assets/components/Experience.jsx";

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Competences />
      <Experience />
      {/*<Quotes />*/}
      <Footer />
    </div>
  )
}

export default App

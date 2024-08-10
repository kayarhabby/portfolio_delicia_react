import '../css/App.css'
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Education from "../components/Education.jsx";
import Footer from "../components/Footer.jsx";
import Quotes from "../components/Quotes.jsx";
import Competences from "../components/Competences.jsx";
import Experience from "../components/Experience.jsx";
import Gallerie from "../components/Gallerie.jsx";
import Contact from "../components/Contact.jsx";

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
      <Gallerie />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

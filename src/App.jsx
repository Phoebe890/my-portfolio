import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Journey />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
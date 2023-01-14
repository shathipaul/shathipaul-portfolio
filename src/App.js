import './App.css';
import About from './components/About/About';
import AllProjects from './components/AllProjects/AllProjects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto px-5'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <AllProjects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

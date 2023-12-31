import About from './About';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
import Skills from './Skills';
import Work from './Work';
import ContactForm from './Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <About/>
      <Skills/>
      <Work/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;

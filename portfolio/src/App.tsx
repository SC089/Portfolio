import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </main>
    <Footer />
  </>
);

export default App;

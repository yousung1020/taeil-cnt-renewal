import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Orders from './components/Orders';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-white/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <News />
        <Orders />
        <Intro />
      </main>
      <Footer />
    </div>
  );
}

export default App;
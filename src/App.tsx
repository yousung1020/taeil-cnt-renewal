import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./home/Home";
import NewsPage from './pages/NewsPage'
import SocialPage from './pages/SocialPage'
import PostDetailPage from './pages/PostDetailPage'
import About from './components/About';
import Work from './components/Work';
import Innovation from './components/Innovation';
import Recruit from './components/Recruit';
import ESG from './components/ESG';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:subpage?" element={<About />} />
            <Route path="/work/:subpage?" element={<Work />} />
            <Route path="/innovation/:subpage?" element={<Innovation />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<PostDetailPage type="news" />} />
            <Route path="/social" element={<SocialPage />} />
            <Route path="/social/:id" element={<PostDetailPage type="social" />} />
            <Route path="/recruit/:subpage?" element={<Recruit />} />
            <Route path="/esg/:subpage?" element={<ESG />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;

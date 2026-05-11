import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./home/Home";
import NewsPage from './pages/NewsPage'
import SocialPage from './pages/SocialPage'
import PostDetailPage from './pages/PostDetailPage'

function App() {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<PostDetailPage type="news" />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/social/:id" element={<PostDetailPage type="social" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

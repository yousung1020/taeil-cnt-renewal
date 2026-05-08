import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NewsPage from './pages/NewsPage'
import SocialPage from './pages/SocialPage'
import PostDetailPage from './pages/PostDetailPage'

function App() {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Navigate to="/news" replace />} />
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

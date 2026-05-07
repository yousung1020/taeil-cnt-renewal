import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SubLayout } from './components/SubLayout';
import { Home } from './pages/Home';

// Job Pages
import { System as JobSystem } from './pages/job/System';
import { Benefits as JobBenefits } from './pages/job/Benefits';
import { Guide as JobGuide } from './pages/job/Guide';
import { Notices as JobNotices } from './pages/job/Notices';
import { Faq as JobFaq } from './pages/job/Faq';

// Tech Pages
import { Vision as TechVision } from './pages/tech/Vision';
import { News as TechNews } from './pages/tech/News';

const jobTabs = [
  { name: '인사제도', path: '/job/system' },
  { name: '복리후생', path: '/job/benefits' },
  { name: '채용가이드', path: '/job/guide' },
  { name: '채용공고', path: '/job/notices' },
  { name: '채용FAQ', path: '/job/faq' },
];

const techTabs = [
  { name: '기술혁신 비전', path: '/tech/vision' },
  { name: '기술혁신 News', path: '/tech/news' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="job" element={<SubLayout title="CAREERS" subtitle="인재채용" tabs={jobTabs} />}>
            <Route index element={<Navigate to="system" replace />} />
            <Route path="system" element={<JobSystem />} />
            <Route path="benefits" element={<JobBenefits />} />
            <Route path="guide" element={<JobGuide />} />
            <Route path="notices" element={<JobNotices />} />
            <Route path="faq" element={<JobFaq />} />
          </Route>

          <Route path="tech" element={<SubLayout title="INNOVATION" subtitle="기술혁신" tabs={techTabs} />}>
            <Route index element={<Navigate to="vision" replace />} />
            <Route path="vision" element={<TechVision />} />
            <Route path="news" element={<TechNews />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
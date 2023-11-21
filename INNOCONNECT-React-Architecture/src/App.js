import { Routes, Route } from 'react-router-dom';
import Home from './pages/landing-page/Home';
import Login from './pages/landing-page/Login';
import Signup from './pages/landing-page/Signup';
import NotFound from './pages/NotFound/NotFound';
import Community from './pages/community/Community';
import JobSearch from './pages/job-search/JobSearch';
import JobDetails from './pages/job-search/JobDetails';
import Application from './pages/job-search/Application';
import MentorForm from './pages/become-mentor/MentorForm';
import Article from './pages/articles/Article';
import Faq from './pages/articles/Faq';
import Smartmatch from './pages/find-a-mentor/Smartmatch';


function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Signup />}
      />
      <Route
        path='/community'
        element={<Community />}
      />
      <Route path="/job-search" element={<JobSearch />} />
      <Route path='/job-details/:id' element={<JobDetails />} />
      <Route path="/apply/:id" element={<Application />} />
      <Route path="/mentor-form" element={<MentorForm />} />
      <Route path="/blog" element={<Article />} />  
      <Route path="/faq" element={<Faq />} />
      <Route path="/Smartmatch" element={<Smartmatch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

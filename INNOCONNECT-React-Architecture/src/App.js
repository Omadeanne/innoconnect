import { Routes, Route } from 'react-router-dom';
import Home from './pages/landing-page/Home';
import Login from './pages/landing-page/Login';
import Signup from './pages/landing-page/Signup';
import NotFound from './pages/NotFound/NotFound';
import Community from './pages/community/Community';
import JobSearch from './pages/job-search/JobSearch';
import JobDetails from './pages/job-search/JobDetails';
import Application from './pages/job-search/Application';
import Smartmatch from './pages/find-a-mentor/Smartmatch';
import Pricing from './pages/pricing/Pricing';
import ForgotPassword from './pages/landing-page/ForgotPassword';
import BecomeMentor from './pages/become-mentor/BecomeMentor';
import MentorForm from './pages/become-mentor/MentorForm';
import Article from './pages/articles/Article';
import Faq from './pages/articles/Faq';
import TermsCondition from './pages/terms-and-conditions/TermsCondition';
import MenteesDashboard from './pages/mentees-dashboard/MenteesDashboard';
import Dashboard from './pages/employers-dashbord/Dashboard';
import MentorsDashboard from './pages/mentors-dashboard/MentorsDashboard';
import MentorsFaq from './pages/articles/MentorsFaq';
import PersonalityTest from './pages/become-mentor/PersonalityTest';
import MentorProfile from './pages/find-a-mentor/MentorProfile';
import PostJobs from './pages/employers-dashbord/PostJobs';
import JobPosted from './pages/employers-dashbord/JobPosted';
import Applicant from './pages/employers-dashbord/Applicant';
import Contact from './pages/contact-us/Contact';
import Layout from './Layout';
import About from './pages/about-us/AboutUs';

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
      <Route element={<Layout />}>
        <Route
          path='/job-search'
          element={<JobSearch />}
        />
        <Route
          path='/job-details/:id'
          element={<JobDetails />}
        />
        <Route
          path='/apply/:id'
          element={<Application />}
        />
        <Route
          path='/Smart-match/'
          element={<Smartmatch />}
        />
        <Route
          path='/mentor-form'
          element={<MentorForm />}
        />
        <Route
          path='/blog'
          element={<Article />}
        />
        <Route
          path='/blog-details/:id'
          element={<JobDetails />}
        />
        <Route
          path='/faq'
          element={<Faq />}
        />
        <Route
          path='/mentors'
          element={<Smartmatch />}
        />
        <Route
          path='/mentors/:id'
          element={<MentorProfile />}
        />
        <Route
          path='/pricing'
          element={<Pricing />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/forgot-password'
          element={<ForgotPassword />}
        />
        <Route
          path='/become-mentor'
          element={<BecomeMentor />}
        />
        <Route
          path='/terms-and-conditions'
          element={<TermsCondition />}
        />
        <Route
          path='/mentees-dashboard'
          element={<MenteesDashboard />}
        />
        <Route
          path='/employers-dashboard'
          element={<Dashboard />}
        />
        <Route
          path='/mentors-dashboard'
          element={<MentorsDashboard />}
        />
        <Route
          path='/mentors-faq'
          element={<MentorsFaq />}
        />
        <Route
          path='/personality-test'
          element={<PersonalityTest />}
        />
        <Route
          path='/mentor-profile'
          element={<MentorProfile />}
        />
        <Route
          path='/post-jobs'
          element={<PostJobs />}
        />
        <Route
          path='/job-posted'
          element={<JobPosted />}
        />
        <Route
          path='/applicant'
          element={<Applicant />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}

export default App;

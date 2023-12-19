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
import Overview from './pages/employers-dashbord/Overview';
import Message from './pages/employers-dashbord/Message';
import MenteeOverview from './pages/mentees-dashboard/MenteeOverview';
// import Courses from './pages/mentees-dashboard/courses/Courses';
import MyMentors from './pages/mentees-dashboard/MyMentors';
import PersistLogin from './PersistLogin';
import ResetPassword from './pages/landing-page/ResetPassword';
import EditJob from './pages/employers-dashbord/EditJob';
import Payment from './pages/pricing/Payment';
import PaymentConfirmation from './pages/pricing/PaymentConfirmation';
import MentorOverview from './pages/mentors-dashboard/MentorOverview';
import MentorMentee from './pages/mentors-dashboard/MentorMentee';
import MentorAppointment from './pages/mentors-dashboard/MentorAppointment';
import Bookmarks from './pages/mentees-dashboard/Bookmarks';
import Applications from './pages/mentees-dashboard/Applications';
import Todos from './pages/mentees-dashboard/Todos';
import VerifyEmail from './pages/verify-email/VerifyEmail';
import ConfirmVerification from './pages/verify-email/ConfirmVerification';

function App() {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/reset-password'
          element={<ResetPassword />}
        />
        <Route
          path='/register'
          element={<Signup />}
        />
        <Route
          path='/community'
          element={<Community />}
        />
        <Route
          path='/job-search'
          element={<JobSearch />}
        />
        <Route
          path='/job-details/:id'
          element={<JobDetails />}
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
          path='/blog'
          element={<Article />}
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
          path='/verify-email'
          element={<VerifyEmail />}
        />
        <Route
          path='/confirm-verification'
          element={<ConfirmVerification />}
        />
        <Route
          path='/terms-and-conditions'
          element={<TermsCondition />}
        />
        <Route
          path='/mentor-form'
          element={<MentorForm />}
        />
        <Route
          path='/mentors-faq'
          element={<MentorsFaq />}
        />
        <Route
          path='/personality-test'
          element={<PersonalityTest />}
        />
        <Route element={<Layout />}>
          <Route
            path='/payment/:id'
            element={<Payment />}
          />
          <Route
            path='/confirmation'
            element={<PaymentConfirmation />}
          />
          <Route
            path='/apply/:id'
            element={<Application />}
          />
          <Route
            path='/mentees-dashboard'
            element={<MenteesDashboard />}
          >
            <Route
              path=''
              element={<MenteeOverview />}
            />
            <Route
              path='bookmarks'
              element={<Bookmarks />}
            />
            <Route
              path='applied-jobs'
              element={<Applications />}
            />
            <Route
              path='todos'
              element={<Todos />}
            />
            <Route
              path='my-mentors'
              element={<MyMentors />}
            />
          </Route>
          <Route
            path='/mentors-dashboard'
            element={<MentorsDashboard />}
          >
            <Route
              path=''
              element={<MentorOverview />}
            />
            <Route
              path='all-mentees'
              element={<MentorMentee />}
            />
            <Route
              path='appointments'
              element={<MentorAppointment />}
            />
          </Route>
          <Route
            path='/employers-dashboard'
            element={<Dashboard />}
          >
            <Route
              path=''
              element={<Overview />}
            />
            <Route
              path='post-job'
              element={<PostJobs />}
            />
            <Route
              path='job-posted'
              element={<JobPosted />}
            />
            <Route
              path='job-posted/edit/:id'
              element={<EditJob />}
            />
            <Route
              path='messages'
              element={<Message />}
            />
            <Route
              path='job-posted/:id/applications'
              element={<Applicant />}
            />
          </Route>
        </Route>
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

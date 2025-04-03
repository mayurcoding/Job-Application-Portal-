import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import ApplicationSummary from "./pages/ApplicationSummary";
import ApplicationForm from "./pages/ApplicationForm";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/apply/:id" element={<ApplicationForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/:id" element={<ApplicationSummary />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </Router>
  );
}

export default App;

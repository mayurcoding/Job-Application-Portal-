import React from "react";
import { useNavigate } from "react-router-dom";
import jobs from "../data/jobs"; // Ensure correct path
import "../styles/Home.css"; // Import CSS for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Job Listings</h1>
      <div className="jobs-grid">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <h4 className="job-company">{job.company}</h4>
            <p className="job-description">{job.description}</p>
            <button
              className="view-details-btn"
              onClick={() => navigate(`/job/${job.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

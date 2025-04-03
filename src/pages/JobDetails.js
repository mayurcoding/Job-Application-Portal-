import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import jobs from "../data/jobs"; // Import job data

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const job = jobs.find((job) => job.id === parseInt(id));

    if (!job) {
        return <h2>Job Not Found</h2>;
    }

    return (
        <div className="job-details">
            <h1>{job.title}</h1>
            <h3>{job.company}</h3>
            <p>{job.description}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            
            {/* Apply Now Button */}
            <button onClick={() => navigate(`/apply/${job.id}`)} className="apply-btn">
                Apply Now
            </button>
        </div>
    );
};

export default JobDetails;

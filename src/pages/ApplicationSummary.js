import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ApplicationSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const applications = useSelector((state) => state.applications);
  const application = applications.find((app) => app.id === parseInt(id));

  if (!application) return <h2>Application Not Found</h2>;

  return (
    <div>
      <h2>Application Details</h2>
      <p><strong>Job ID:</strong> {application.jobId}</p>
      <p><strong>Name:</strong> {application.applicantName}</p>
      <p><strong>Email:</strong> {application.email}</p>
      <p><strong>Phone:</strong> {application.phone}</p>
      <p><strong>Experience:</strong> {application.experience} years</p>
      <p><strong>Skills:</strong> {application.skills.join(", ")}</p>
      <p><strong>Cover Letter:</strong> {application.coverLetter}</p>
      <p><strong>Start Date:</strong> {application.startDate}</p>

      <button onClick={() => navigate("/applications")}>Back to Applications</button>
    </div>
  );
};

export default ApplicationSummary;

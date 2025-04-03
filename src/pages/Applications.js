import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editApplication } from "../redux/applicationSlice";

const ApplicationSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applications);
  const application = applications.find((app) => app.id === parseInt(id));

  const [isEditing, setIsEditing] = useState(false);
  const [updatedApplication, setUpdatedApplication] = useState(application);

  if (!application) return <h2>Application Not Found</h2>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedApplication({ ...updatedApplication, [name]: value });
  };

  const handleSave = () => {
    dispatch(editApplication(updatedApplication));
    setIsEditing(false);
    alert("Application Updated!");
  };

  return (
    <div>
      <h2>Application Details</h2>
      <p><strong>Job ID:</strong> {application.jobId}</p>
      <p><strong>Name:</strong> {isEditing ? <input type="text" name="applicantName" value={updatedApplication.applicantName} onChange={handleChange} /> : application.applicantName}</p>
      <p><strong>Email:</strong> {isEditing ? <input type="email" name="email" value={updatedApplication.email} onChange={handleChange} /> : application.email}</p>
      <p><strong>Phone:</strong> {isEditing ? <input type="tel" name="phone" value={updatedApplication.phone} onChange={handleChange} /> : application.phone}</p>
      <p><strong>Experience:</strong> {isEditing ? <input type="number" name="experience" value={updatedApplication.experience} onChange={handleChange} /> : application.experience} years</p>
      <p><strong>Skills:</strong> {application.skills.join(", ")}</p>
      <p><strong>Cover Letter:</strong> {isEditing ? <textarea name="coverLetter" value={updatedApplication.coverLetter} onChange={handleChange} /> : application.coverLetter}</p>
      <p><strong>Start Date:</strong> {isEditing ? <input type="date" name="startDate" value={updatedApplication.startDate} onChange={handleChange} /> : application.startDate}</p>

      {isEditing ? (
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit Application</button>
      )}
      <br />
      <button onClick={() => navigate("/applications")}>Back to Applications</button>
    </div>
  );
};

export default ApplicationSummary;

import { useDispatch } from "react-redux";
import { addApplication } from "../redux/applicationSlice";
import { useParams, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useState } from "react";

const Apply = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { formData, setFormData, handleChange, step, nextStep, prevStep } = useForm({
    jobId: id,
    applicantName: "",
    email: "",
    phone: "",
    experience: "",
    skills: [],
    coverLetter: "",
    startDate: "",
  });

  const [skillInput, setSkillInput] = useState("");

  // Add skills dynamically
  const addSkill = () => {
    if (skillInput.trim()) {
      setFormData({ ...formData, skills: [...formData.skills, skillInput] });
      setSkillInput("");
    }
  };

  // Submit Application
  const handleSubmit = () => {
    dispatch(addApplication(formData));
    alert("Application Submitted!");
    navigate("/applications");
  };

  return (
    <div>
      <h2>Job Application</h2>

      {step === 1 && (
        <div>
          <h3>Step 1: Personal Information</h3>
          <label>Name:</label>
          <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} required />
          <br />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <br />
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          <br />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Step 2: Experience</h3>
          <label>Years of Experience:</label>
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
          <br />
          <label>Skills:</label>
          <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} />
          <button onClick={addSkill}>Add Skill</button>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Step 3: Additional Information</h3>
          <label>Cover Letter:</label>
          <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} required />
          <br />
          <label>Preferred Start Date:</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Apply;

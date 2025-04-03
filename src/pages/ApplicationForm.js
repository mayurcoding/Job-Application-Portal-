import React, { useState } from "react";
import "./ApplicationForm.css"; // Import CSS file

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: [],
    coverLetter: "",
    startDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ""] });
  };

  const updateSkill = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
  };

  return (
    <div className="application-form">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h3>Step 1: Personal Information</h3>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Phone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h3>Step 2: Experience</h3>
            <label>Years of Experience:</label>
            <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />

            <label>Skills:</label>
            {formData.skills.map((skill, index) => (
              <input key={index} type="text" value={skill} onChange={(e) => updateSkill(index, e.target.value)} />
            ))}
            <button type="button" onClick={addSkill}>Add Skill</button>

            <div className="buttons">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h3>Step 3: Additional Information</h3>
            <label>Cover Letter:</label>
            <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} required />

            <label>Preferred Start Date:</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />

            <div className="buttons">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="submit">Submit</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ApplicationForm;

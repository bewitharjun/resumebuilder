import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');

  const handleAddEducation = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  const handleAddSkill = () => {
    if (skillInput) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the resume data using the state variables

    // Reset the form after submission
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
    setEducation([{ institute: '', year: '', degree: '' }]);
    setExperience([{ company: '', year: '', designation: '' }]);
    setSkills([]);
    setSkillInput('');
  };

  return (
    <div className="container">
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <h4>Education:</h4>
          {education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control"
                value={edu.institute}
                onChange={(

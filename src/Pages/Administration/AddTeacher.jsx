import axios from "axios";
import React, { useState } from "react";
import "./AddTeacher.css";

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [nameBangla, setNameBangla] = useState("");
  const [hometown, setHometown] = useState("");
  const [lastAcademicDegree, setLastAcademicDegree] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [socialAccountLink, setSocialAccountLink] = useState("");
  const [subject, setSubject] = useState("");
  const [designation, setDesignation] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [message, setMessage] = useState(""); // Combine success and error message into one state variable

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const teacherData = {
        name,
        nameBangla,
        hometown,
        lastAcademicDegree,
        dateOfJoining,
        employeeId,
        contactPhone,
        socialAccountLink,
        subject,
        designation,
        profileImage: profileImage?.name,
      };

      console.log(teacherData);

      const response = await axios.post(
        "http://localhost:8000/teachers",
        teacherData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("Teacher added successfully");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      // If there's an error, set error message
      setMessage("Error adding teacher");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setProfileImage(file);
  };

  return (
    <div className="top_add">
      <h2>ADD NEW TEACHER</h2>

      <div className="add-teacher">
        <form onSubmit={handleSubmit}>
          {message && (
            <div className="message-modal">
              <div className="message-content">{message}</div>
            </div>
          )}
          <div className="form-row">
            <div className="form-group">
              <label>Teacher Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Name Bangla:</label>
              <input
                type="text"
                value={nameBangla}
                onChange={(e) => setNameBangla(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Subject:</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Designation:</label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Hometown:</label>
              <input
                type="text"
                value={hometown}
                onChange={(e) => setHometown(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Academic Degree:</label>
              <input
                type="text"
                value={lastAcademicDegree}
                onChange={(e) => setLastAcademicDegree(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date of Joining:</label>
              <input
                type="text"
                value={dateOfJoining}
                onChange={(e) => setDateOfJoining(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Employee ID:</label>
              <input
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Social Account Link:</label>
              <input
                type="text"
                value={socialAccountLink}
                onChange={(e) => setSocialAccountLink(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row drag_img">
            <div className="form-group">
              <label>Profile Image of Teacher:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div
            className="drop-zone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <p>Drag & Drop Profile Image Here</p>
          </div>
          <button type="submit">Add Teacher</button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;

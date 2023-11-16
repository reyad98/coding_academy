import React from "react";
import { useParams } from "react-router-dom";
import TeacherData from "./TeacherData";
import "./TeacherProfile.css";

const TeacherProfile = () => {
  const { id } = useParams();
  console.log("Teacher ID from URL:", id);

  // Find the selected teacher in the TeacherData array based on 'id'
  const selectedTeacher = TeacherData.find(
    (teacher) => teacher.id === parseInt(id, 10)
  );

  // Check if the selected teacher exists
  if (!selectedTeacher) {
    return <div>Teacher not found</div>;
  }

  return (
    <div>
      <div className="tp_teacher-profile">
        <h2>Teacher Details</h2>
      </div>
      <div className="tp_teacher-details">
        <div className="tp_teacher-image">
          <img src={selectedTeacher.image} alt={selectedTeacher.name} />
        </div>
        <div className="tp_teacher-info">
          <h2 className="tp_teacher-name">{selectedTeacher.name}</h2>
          <h2 className="tp_teacher-name">{selectedTeacher.name_bangla}</h2>
          <p className="tp_teacher-designation">
            {selectedTeacher.designation}
          </p>
          <p className="dept_teacher">
            Depertment of {selectedTeacher.subject}, Demo College, Dhaka
          </p>
        </div>
      </div>
      <div className="tp_teacher-table">
        <table>
          <tbody>
            <tr>
              <td className="custom-td">Name:</td>
              <td>{selectedTeacher.name}</td>
            </tr>
            <tr>
              <td className="custom-td">Hometown:</td>
              <td>{selectedTeacher.hometown}</td>
            </tr>
            <tr>
              <td className="custom-td">Last Academic Degree:</td>
              <td>{selectedTeacher.lastAcademicDegree}</td>
            </tr>
            <tr>
              <td className="custom-td">Date of Joining:</td>
              <td>{selectedTeacher.dateOfJoining}</td>
            </tr>
            <tr>
              <td className="custom-td">Employee ID:</td>
              <td>{selectedTeacher.employeeId}</td>
            </tr>
            <tr>
              <td className="custom-td">Contact/Phone:</td>
              <td>{selectedTeacher.contactPhone}</td>
            </tr>
            <tr>
              <td className="custom-td">Social Account Link:</td>
              <td>
                <a
                  href={selectedTeacher.socialAccountLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedTeacher.socialAccountLink}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherProfile;

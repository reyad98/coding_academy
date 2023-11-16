import { default as img1, default as img4 } from "../images/anisurrahman.jpg";
import { default as img2, default as img5 } from "../images/img8.jpg";

const TeacherData = [
  {
    id: 1,
    name: "ANISUR RAHMAN",
    name_bangla: "আনিছুর রহমান",
    designation: "Lecturer",
    subject: "Math",
    phone: "123-456-7890",
    employeeId: "EMP123",
    image: img1,
    University: "DU",
    hometown: "Dhaka",
    lastAcademicDegree: "Masters in Mathematics",
    dateOfJoining: "January 1, 2020",
    contactPhone: "+1234567890",
    socialAccountLink: "https://example.com/anisurrahman",
  },
  {
    id: 2,
    name: "KHALID HASAN NILOY",
    name_bangla: "খালিদ হাসান নিলয়",
    designation: "Science Teacher",
    subject: "Science",
    phone: "987-654-3210",
    employeeId: "EMP456",
    image: img2,
    hometown: "Chittagong",
    lastAcademicDegree: "Bachelor in Science",
    dateOfJoining: "February 15, 2019",
    contactPhone: "+9876543210",
    socialAccountLink: "https://example.com/khalidhasanniloy",
  },
  {
    id: 3,
    name: "ANISUR RAHMAN",
    name_bangla: "আনিছুর রহমান",
    designation: "Lecturer",
    subject: "Math",
    phone: "123-456-7890",
    employeeId: "EMP123",
    image: img4,
    hometown: "Dhaka",
    lastAcademicDegree: "Masters in Mathematics",
    dateOfJoining: "March 10, 2021",
    contactPhone: "+1234567890",
    socialAccountLink: "https://example.com/anisurrahman",
  },
  {
    id: 4,
    name: "KHALID HASAN NILOY",
    name_bangla: "খালিদ হাসান নিলয়",
    designation: "Science Teacher",
    subject: "Science",
    phone: "987-654-3210",
    employeeId: "EMP456",
    image: img5,
    hometown: "Chittagong",
    lastAcademicDegree: "Bachelor in Science",
    University: "DU",
    dateOfJoining: "April 5, 2022",
    contactPhone: "+9876543210",
    socialAccountLink: "https://example.com/khalidhasanniloy",
  },
  // Add more teachers...
];

export default TeacherData;

// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link and useHistory
// import TeacherData from "./TeacherData";
// import "./Teachers.css";

// const Teachers = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedSubject, setSelectedSubject] = useState("");
//   const itemsPerPage = 6;

//   const filteredTeachers = TeacherData.filter((teacher) => {
//     const nameMatch = teacher.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const subjectMatch =
//       !selectedSubject || teacher.subject === selectedSubject;
//     return nameMatch && subjectMatch;
//   });

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const teachersToDisplay = filteredTeachers.slice(startIndex, endIndex);
//   const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);

//   return (
//     <div className="teachers-container">
//       <h2>Teachers</h2>
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select
//           value={selectedSubject}
//           onChange={(e) => setSelectedSubject(e.target.value)}
//         >
//           <option value="">Select Subject</option>
//           <option value="Math">Math</option>
//           <option value="Science">Science</option>
//         </select>
//       </div>
//       <div className="teacher-list">
//         {teachersToDisplay.map((teacher) => (
//           <Link
//             to={`/teacher/${teacher.id}`} // Link to the TeacherProfile page
//             key={teacher.id}
//             className="teacher-card"
//           >
//             <div className="teacher-image">
//               <img src={teacher.image} alt={teacher.name} />
//             </div>
//             <div className="teacher-details">
//               <h4>{teacher.name_bangla}</h4>
//               <h3>{teacher.name}</h3>
//               <h5>{teacher.designation}</h5>
//               <p>
//                 <strong> Subject:</strong> {teacher.subject}
//               </p>
//               <p>
//                 <strong>Phone:</strong> {teacher.phone}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//           (page) => (
//             <button
//               key={page}
//               className={page === currentPage ? "active" : ""}
//               onClick={() => setCurrentPage(page)}
//             >
//               {page}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Teachers;

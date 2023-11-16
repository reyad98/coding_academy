import React from "react";
import AboutCollege from "../MainContainer/AboutCollege";
import HistoryImage from "../images/a4.jpeg"; // Import your history image
import "./About.css";

const admissionData = [
  {
    id: 1,
    group: "Science",
    version: "Bangla",
    shift: "Day",
    minimumGPA: 4.0,
    totalSeat: 350,
  },
  {
    id: 2,
    group: "Commerce",
    version: "English",
    shift: "Morning",
    minimumGPA: 3.5,
    totalSeat: 200,
  },
  {
    id: 3,
    group: "Arts",
    version: "English",
    shift: "Morning",
    minimumGPA: 3.0,
    totalSeat: 200,
  },
  // Add more data as needed
];

const About = () => {
  return (
    <section className="about-section">
      <div className="top-about">
        <h3>কোডিং একাডেমি পাবলিক কলেজ </h3>
      </div>
      <div className="at-a-glance-section">
        <div className="at-a-glance-box">
          <h3>EIIN</h3>
          <p>123456</p>
        </div>

        <div className="at-a-glance-box">
          <h3>Version</h3>
          <p>Bangla</p>
        </div>
        <div className="at-a-glance-box">
          <h3>Shift</h3>
          <p>Morning/Day</p>
        </div>
        <div className="at-a-glance-box">
          <h3>Location</h3>
          <p>City, Country</p>
        </div>
        <div className="at-a-glance-box">
          <h3>Date of Establishment</h3>
          <p>January 1, 2022</p>
        </div>
        <div className="at-a-glance-box">
          <h3>Contact Info</h3>
          <p>Phone: +123456789</p>
        </div>
      </div>
      <AboutCollege></AboutCollege>
      <div className="history-section">
        <h2>কলেজের ইতিহাস</h2>
        <p>কলেজের ইতিহাসের বিস্তারিত বর্ণনা...</p>
        <img src={HistoryImage} alt="History" />
        <p className="history_p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniam
          dicta itaque eveniet deleniti. Neque ea ex reprehenderit dignissimos
          blanditiis exercitationem possimus perspiciatis maxime minima
          doloribus, laudantium obcaecati iusto natus et cum odit alias dolore
          quos! Vitae veniam nesciunt dolorem aliquid harum consequatur nostrum
          quod. Labore unde repudiandae blanditiis beatae pariatur hic ducimus?
          Excepturi aspernatur facilis, reiciendis aut, nemo earum id quae
          quibusdam placeat rem tempora commodi corporis. Obcaecati repudiandae
          ducimus eos iure officia cupiditate placeat dolorem, quod modi! Qui,
          sequi voluptates laudantium voluptate magni animi sed ea ad natus enim
          libero, aut veniam, repellat consectetur fugiat excepturi optio
          commodi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
          veniam dicta itaque eveniet deleniti. Neque ea ex reprehenderit
          dignissimos blanditiis exercitationem possimus perspiciatis maxime
          minima doloribus, laudantium obcaecati iusto natus et cum odit alias
          dolore quos! Vitae veniam nesciunt dolorem aliquid harum consequatur
          nostrum quod. Labore unde repudiandae blanditiis beatae pariatur hic
          ducimus? Excepturi aspernatur facilis, reiciendis aut, nemo earum id
          quae quibusdam.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniam
          dicta itaque eveniet deleniti. Neque ea ex reprehenderit dignissimos
          blanditiis exercitationem possimus perspiciatis maxime minima
          doloribus, laudantium obcaecati iusto natus et cum odit alias dolore
          quos! Vitae veniam nesciunt dolorem aliquid harum consequatur nostrum
          quod. Labore unde repudiandae blanditiis beatae pariatur hic ducimus?
          Excepturi aspernatur facilis, reiciendis aut, nemo earum id quae
          quibusdam placeat rem tempora commodi corporis. Obcaecati repudiandae
          ducimus eos iure officia cupiditate placeat dolorem, quod modi! Qui,
          sequi voluptates laudantium voluptate magni animi sed ea ad natus enim
          libero, aut veniam, repellat quae quibusdam.
        </p>
      </div>

      <div className="counts-section">
        <div className="count-box">
          <i className="fas fa-chalkboard-teacher"></i>
          <p>মোট শিক্ষক: 50+</p>
        </div>
        <div className="count-box">
          <i className="fas fa-user-graduate"></i>
          <p>মোট ছাত্র: 1000+</p>
        </div>
        <div className="count-box">
          <i className="fas fa-users"></i>
          <p>মোট কর্মচারী: 30+</p>
        </div>
      </div>

      <div className="admission-criteria">
        <h2>ভর্তি সর্বনিম্ন যোগ্যতা এবং আসন সংখ্যা</h2>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Group</th>
              <th>Version</th>
              <th>Shift</th>
              <th>Minimum GPA</th>
              <th>Total Seat</th>
            </tr>
          </thead>
          <tbody>
            {admissionData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.group}</td>
                <td>{data.version}</td>
                <td>{data.shift}</td>
                <td>{data.minimumGPA}</td>
                <td>{data.totalSeat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add more sections here */}
    </section>
  );
};

export default About;

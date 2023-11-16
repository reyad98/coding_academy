import React from "react";
import "./NoticePage.css";

const NoticePage = () => {
  // Sample data for demonstration
  const notices = [
    {
      slNo: 1,
      date: "2023-09-01",
      title:
        "স্মার্ট বাংলাদেশ পুরষ্কার ২০২৩ এর জন্য মনোনয়ন/আবেদনপত্র আহবান সংক্রান্ ",
      view: 50,
    },
    {
      slNo: 2,
      date: "2023-09-01",
      title: "জাতীয় শোক দিবস ২০২৩ উদযাপন উপলক্ষে আয়োজিত প্রতিযোগিতা সংক্রান্ত",
      view: 50,
    },
    {
      slNo: 3,
      date: "2023-09-01",
      title:
        "স্মার্ট বাংলাদেশ পুরষ্কার ২০২৩ এর জন্য মনোনয়ন/আবেদনপত্র আহবান সংক্রান্",
      view: 50,
    },
    {
      slNo: 4,
      date: "2023-09-01",
      title: "Important Announcement",
      view: 50,
    },
    {
      slNo: 5,
      date: "2023-09-01",
      title: "Important Announcement",
      view: 50,
    },
    // Add more sample notices as needed
  ];

  return (
    <div className="notice-page-m">
      <h2>নোটিশ বোর্ড</h2>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Date</th>
            <th> Title</th>
            <th>View</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => (
            <tr key={index}>
              <td>{notice.slNo}</td>
              <td>{notice.date}</td>
              <td>{notice.title}</td>
              <td>{notice.view}</td>
              <td>
                {notice.download}
                <i className="fa fa-download"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticePage;

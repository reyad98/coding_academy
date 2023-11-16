// AboutCollege.js
import React from "react";
import collegeImage from "../images/diu.jpg"; // Replace with your image path
import "./AboutCollege.css";

function AboutCollege() {
  return (
    <div className="about-college">
      <h2 className="section-title_about">কলেজ পরিচিতি</h2>
      <div className="content">
        <div className="image-container_about">
          <img src={collegeImage} alt="College" className="college-image" />
        </div>
        <p className="college-description">
          আমাদের কলেজ পরিচিতি বিষয়ক মতে এখানে আপনার কলেজের সংক্ষিপ্ত বিবরণ থাকতে
          পারে। এটি একটি মিশ্রণ শিক্ষা প্রতিষ্ঠান, যেখানে প্রাথমিক ও মাধ্যমিক
          শিক্ষার সাথে উচ্চশিক্ষাও অফার করা হয়। কলেজের উপকরণ সেমিনার, ওয়ার্কশপ,
          সাধারণ জ্ঞান ও প্রোফেশনাল শিক্ষার উন্নতির জন্য তালিকাভুক্ত থাকে।
          আমাদের কলেজ পরিচিতি বিষয়ক মতে এখানে আপনার কলেজের সংক্ষিপ্ত বিবরণ থাকতে
          পারে। এটি একটি মিশ্রণ শিক্ষা প্রতিষ্ঠান, যেখানে প্রাথমিক ও মাধ্যমিক
          শিক্ষার সাথে উচ্চশিক্ষাও অফার করা হয়। আমাদের কলেজ পরিচিতি বিষয়ক মতে
          এখানে আপনার কলেজের সংক্ষিপ্ত বিবরণ থাকতে পারে। এটি একটি মিশ্রণ শিক্ষা
          প্রতিষ্ঠান, যেখানে প্রাথমিক ও মাধ্যমিক শিক্ষার সাথে উচ্চশিক্ষাও অফার
          করা হয়।
        </p>
      </div>
    </div>
  );
}

export default AboutCollege;

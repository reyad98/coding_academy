// PrincipleMessage.js
import React, { useState } from "react";
import imgp from "../images/prin1.png";
import "./PrincipleMessage.css";

const demoMessage =
  "আসসালামু আলাইকুম, আমরা আমাদের প্রধান বার্তা সাঝায়। আমরা গর্বিত এবং আপনাদের স্বাগত জানাতে প্রস্তুত। আমাদের কলেজ একটি দৃঢ় মূলধারা উপস্থাপন করে, যা শিক্ষার্থীদের উন্নতির জন্য অবলম্বন দেয়। আমরা শিক্ষার্থীদের শিক্ষায় সক্ষম ও আত্মনির্ভরণ করার জন্য পর্যাপ্ত সুযোগ সরবরাহ করতে প্রতিশ্রুতি দিচ্ছি। আমরা শিক্ষার্থীদের যোগ্যতা ও তম্মধ্যে বৈশিষ্ট্যের সাথে মিলিত ভাবে প্রশিক্ষণ দেওয়ার জন্য ব্যর্থ নই। আমরা শিক্ষার্থীদের একটি সক্ষম ও নৈতিক নেতার মতো তৈরি করার জন্য প্রতিবদ্ধ আছি। ধন্যবাদ যে আপনি আমাদের সাথে একটি সুযোগ দিচ্ছেন আমাদের লক্ষ্য এবং মিশনে এগিয়ে যাওয়ার।";

function PrincipleMessage({ limit }) {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const toggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };

  const messageToShow = showFullMessage
    ? demoMessage
    : demoMessage.slice(0, limit);

  return (
    <div className="principle-header">
      <h3>অধ্যক্ষের বার্তা</h3>
      <div className="principle-message">
        <img src={imgp} alt="Principle" className="image" />
        <p className="message-text">
          {messageToShow}
          {demoMessage.length > limit && (
            <span className="see-more-link" onClick={toggleMessage}>
              {showFullMessage ? "See less" : "See more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default PrincipleMessage;

// NoticePage.js
import "./Notice.css";

const notices = [
  "স্মার্ট বাংলাদেশ পুরষ্কার ২০২৩ এর জন্য মনোনয়ন/আবেদনপত্র আহবান সংক্রান্ত",
  "ভর্তি বিজ্ঞপ্তি",
  "জাতীয় শোক দিবস ২০২৩ উদযাপন উপলক্ষে আয়োজিত প্রতিযোগিতা সংক্রান্ত",
  "১৫ ই আগস্ট জাতীয় শোক দিবস ২০২৩ উদযাপন উপলক্ষে গঠিত উপকমিটি",
  "১৫ ই আগস্ট, জাতীয় শোক দিবস ২০২৩, যথাযথ মর্যাদায় উদযাপন উপলক্ষে গৃহীত কর্মসূচী",
];

function Notice() {
  return (
    <div className="notice-page">
      <h1>নোটিশ বোর্ড</h1>
      <ul className="notice-list">
        {notices.map((notice, index) => (
          <li key={index}>
            <div className="notice-icon"></div>
            <p className="notice-text">{notice}</p>
            {index < notices.length - 1 && <hr className="divider" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notice;

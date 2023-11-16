import React, { useState } from "react";
import "./Calendar.css"; // Add your CSS styles for the calendar

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const startDayIndex = firstDayOfMonth.getDay();

  const prevMonthDays = startDayIndex;
  const nextMonthDays = 42 - daysInMonth - prevMonthDays;

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">
        {[...Array(prevMonthDays)].map((_, index) => (
          <div key={`prev-${index}`} className="day empty"></div>
        ))}
        {[...Array(daysInMonth)].map((_, index) => (
          <div
            key={`current-${index}`}
            className={`day_row ${
              (index + prevMonthDays + 1) % 7 === 6 ? "friday" : ""
            }`}
          >
            {index + 1}
          </div>
        ))}
        {[...Array(nextMonthDays)].map((_, index) => (
          <div key={`next-${index}`} className="day empty"></div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

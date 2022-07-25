import React, { useEffect, useRef, useState } from "react";
import "./dateStyles.css";
import DateConverter from "../utils/DateConverter";

function DatePicker() {
  const todayDate = DateConverter.currentNepaliDate();
  const dateObject = DateConverter.destructureDate(todayDate);
  const [currentYear, setCurrentYear] = useState(dateObject?.year);
  const [currentMonth, setCurrentMonth] = useState(dateObject?.month);
  const currentDay = dateObject?.day;
  const [showYearCalendar, setShowYearCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(todayDate);
  const [monthDays, setMonthDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [monthName, setMonthName] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const [changeDate, setChangeDate] = useState();
  const [error, setError] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    const days = DateConverter.calendar(currentMonth, currentYear);
    setMonthDays(days);
  }, [currentMonth, currentYear]);

  useEffect(() => {
    if (currentMonth) {
      const currentName = DateConverter.getMonthName(currentMonth - 1);
      setMonthName(currentName);
    }
  }, [currentMonth]);

  useEffect(() => {
    setCurrentDate(currentYear + "-" + currentMonth + "-" + currentDay);
  }, [currentDay, currentMonth, currentYear]);

  const checkActive = (item) => {
    if (currentYear === item) {
      return "active";
    } else return "";
  };

  const showYear = () => {
    setShowYearCalendar((prev) => !prev);
  };

  const changeCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const handlePrev = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const changeDay = (date) => {
    setSelectedDate(date);
    changeCalendar();
  };

  const changeYear = (date) => {
    setCurrentYear(date);
    showYear();
  };

  const checkToday = (date) => {
    if (date === todayDate) {
      return "today";
    } else return "";
  };
  const checkSelected = (date) => {
    if (selectedDate === date) {
      return "selected";
    } else return "";
  };

  const checkFormat = () => {
    const inputVal = inputRef?.current?.value;
    if (inputVal?.split("-")?.length === 3) {
      return setError(false);
    }
    return setError(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value, "e");
    setChangeDate(e.target.value);
    checkFormat();
  };

  return (
    <div class="nepali-date-picker">
      <input
        type="text"
        class="date-picker-input"
        // readonly=""
        ref={inputRef}
        onChange={handleChange}
        value={changeDate || selectedDate || currentDate}
        onFocus={changeCalendar}
      />
      <label htmlFor="">{error ? "Invalid format use YYYY-MM-DD" : ""}</label>
      <div class={`calender ${showCalendar ? "active" : ""}`}>
        <div class="calendar-wrapper">
          <div class="calendar-controller">
            <div class="date-controller" onClick={showYear}>
              <span class="current-month">{monthName}</span>
              <span class="current-year">{currentYear}</span>
              <span class={`caret ${showYearCalendar ? "up" : "down"}`}></span>
            </div>
            <div class="arrow-wrapper">
              <span class="prev-icon arrow left" onClick={handlePrev}></span>
              <span class="next-icon arrow right" onClick={handleNext}></span>
            </div>
          </div>
          <div class={`year-controller ${showYearCalendar ? "active" : ""}`}>
            {[...Array(130).keys()].map((item, index) => (
              <span
                class={`year ${checkActive(1970 + item)}`}
                key={index}
                onClick={() => changeYear(1970 + item)}
              >
                {1970 + item}
              </span>
            ))}
          </div>
          <table>
            <thead>
              <tr>
                <td>Sun</td>
                <td>Mon</td>
                <td>Tue</td>
                <td>Wed</td>
                <td>Thu</td>
                <td>Fri</td>
                <td>Sat</td>
              </tr>
            </thead>
            <tbody>
              {monthDays?.map((item, index) => (
                <tr key={index}>
                  {item?.map((day, ind) => (
                    <td
                      onClick={() => changeDay(day?.date)}
                      key={ind + day?.date}
                      class={`month-day ${
                        day?.disable ? "disabled" : ""
                      } ${checkToday(day?.date)} ${checkSelected(day?.date)}`}
                    >
                      {day?.value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;

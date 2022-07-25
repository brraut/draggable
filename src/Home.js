import React, { useEffect, useState } from "react";
import DatePicker from "./datepicker/DatePicker";

import { convertToEnglish, convertToNepali, formatDate } from "./utils/date";
import DateConverter from "./utils/DateConverter";

function Home() {
  // console.log(convertToNepali(new Date()));
  const [month, setMonth] = useState(2);
  const [year, setYear] = useState(2079);
  const [monthDays, setMonthDays] = useState([]);
  const [date, setDate] = useState("");
  const [inputNepali, setInputNepali] = useState();
  const [inputEnglish, setInputEnglish] = useState();
  const [bs, setBS] = useState();
  const [ad, setAD] = useState();
  const handleChange = (val) => {
    setDate(val);
  };
  useEffect(() => {
    // const days = DateConverter.calendar(month, year);
    // setMonthDays(days);
    // console.log(days);
  }, [month, year]);

  const heading = {
    border: "1px solid gray",
    fontSize: "16px",
    padding: "10px",
  };

  const handleEnglish = (e) => {
    setBS(convertToNepali(e.target.value));
  };

  const handleNepali = (e) => {
    setAD(convertToEnglish(e.target.value));
  };
  return (
    <>
      <DatePicker />
      <div>
        <h6>AD to BS</h6>
        <input type="date" onChange={handleEnglish} />
        <h6>Date:{bs} </h6>
      </div>
      <hr />
      <div>
        <h6>BS to AD</h6>
        {/* <input type="text" onChange={handleNepali} /> */}

        <h6>Date: </h6>
      </div>
      {/* <div>{convertToEnglish()}</div> */}
      <div>{console.log()}</div>

      <hr />
      <div style={{ display: "flex" }}>
        <div>
          <h6 style={{ margin: 0 }}>Month</h6>
          <select onChange={(e) => setMonth(e.target.value)} value={month}>
            <option value="0">Baisakh</option>
            <option value="1">Jestha</option>
            <option value="2">Ashad</option>
            <option value="3">Shrawan</option>
            <option value="4">Bhadra</option>
            <option value="5">Ashoj</option>
            <option value="6">Kartik</option>
            <option value="11">Chaitra</option>
          </select>
        </div>
        <div>
          <h6 style={{ margin: "0" }}>Year</h6>
          <select onChange={(e) => setYear(e.target.value)} value={year}>
            <option value="2077">2077</option>
            <option value="2078">2078</option>
            <option value="2079">2079</option>
            <option value="2080">2080</option>
            <option value="2081">2081</option>
          </select>
        </div>
      </div>
      <hr />
      <input type="text" value={date} />
      <hr />

      <table style={{ border: "1px solid gray", borderCollapse: "collapse" }}>
        <thead>
          <th style={{ ...heading }}>Sun</th>
          <th style={{ ...heading }}>Mon</th>
          <th style={{ ...heading }}>Tue</th>
          <th style={{ ...heading }}>Wed</th>
          <th style={{ ...heading }}>Thu</th>
          <th style={{ ...heading }}>Fri</th>
          <th style={{ ...heading }}>Sat</th>
        </thead>
        <tbody>
          {monthDays?.map((item, index) => (
            <tr key={index}>
              {item?.map((day, ind) => (
                <td
                  onClick={() => handleChange(day?.date)}
                  key={ind + day?.date}
                  style={{
                    border: "1px solid gray",
                    cursor: day?.disable ? "normal" : "pointer",
                    color: day?.disable ? "gray" : "black",
                    fontSize: "16px",
                    padding: "10px",
                    background: date == day?.date ? "#bfbfff" : "transparent",
                  }}
                >
                  {day?.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;

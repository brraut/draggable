let DateConverter = (function () {
  const dateFormats = [
    "MM-DD-YYYY",
    "MM/DD/YYYY",
    "YYYY-MM-DD",
    "YYYY/MM/DD",
    "DD-MM-YYYY",
    "DD/MM/YYYY",
  ];
  const months = [
    "Baisakh",
    "Jestha",
    "Ashad",
    "Shrawan",
    "Bhadra",
    "Ashoj",
    "Kartik",
    "Mangshir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra",
  ];

  let scodusMonths = [],
    scodusRef = { year: 2000, month: 9, day: 17 },
    englishRef = { year: 1944, month: 1, day: 1 };
  scodusMonths[1970] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1971] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[1972] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[1973] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[1974] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1975] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[1976] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[1977] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31];
  scodusMonths[1978] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1979] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[1980] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[1981] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
  scodusMonths[1982] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1983] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[1984] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[1985] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
  scodusMonths[1986] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1987] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[1988] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[1989] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1990] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1991] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
  scodusMonths[1992] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[1993] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1994] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1995] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
  scodusMonths[1996] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[1997] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1998] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[1999] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2000] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2001] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2002] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2003] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2004] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2005] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2006] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2007] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2008] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
  scodusMonths[2009] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2010] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2011] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2012] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
  scodusMonths[2013] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2014] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2015] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2016] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
  scodusMonths[2017] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2018] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2019] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2020] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2021] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2022] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
  scodusMonths[2023] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2024] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2025] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2026] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2027] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2028] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2029] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2030] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2031] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2032] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2033] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2034] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2035] = [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
  scodusMonths[2036] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2037] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2038] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2039] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
  scodusMonths[2040] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2041] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2042] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2043] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
  scodusMonths[2044] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2045] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2046] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2047] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2048] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2049] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
  scodusMonths[2050] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2051] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2052] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2053] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
  scodusMonths[2054] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2055] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2056] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2057] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2058] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2059] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2060] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2061] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2062] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31];
  scodusMonths[2063] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2064] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2065] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2066] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
  scodusMonths[2067] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2068] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2069] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2070] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
  scodusMonths[2071] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2072] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2073] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
  scodusMonths[2074] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2075] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2076] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
  scodusMonths[2077] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
  scodusMonths[2078] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2079] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
  scodusMonths[2080] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
  scodusMonths[2081] = [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2082] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2083] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2084] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2085] = [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30];
  scodusMonths[2086] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2087] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
  scodusMonths[2088] = [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30];
  scodusMonths[2089] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2090] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2091] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
  scodusMonths[2092] = [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2093] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2094] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2095] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30];
  scodusMonths[2096] = [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
  scodusMonths[2097] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
  scodusMonths[2098] = [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31];
  scodusMonths[2099] = [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30];

  // change givin date into year, month and day
  function destructureDate(date) {
    let cDate = new Date(date);
    let formattedDate =
      cDate?.getFullYear() + "-" + cDate?.getMonth() + "-" + cDate?.getDate();
    let n = [],
      r = { year: null, month: null, day: null };
    if (formattedDate) {
      n = formattedDate?.split("-");
      3 === n.length &&
        (r = {
          year: Number(n[0]),
          month: Number(n[1]) + 1,
          day: Number(n[2]),
        });
    }
    return r;
  }

  function changeFormat(e, t) {
    function n(e) {
      return (e = Number(e)), e < 10 ? "0" + e : e;
    }
    let r = "";
    switch ((t = t && dateFormats.indexOf(t) > -1 ? t : "YYYY-MM-DD")) {
      case "MM/DD/YYYY":
        r = n(e.month) + "/" + n(e.day) + "/" + e.year;
        break;
      case "MM-DD-YYYY":
        r = n(e.month) + "-" + n(e.day) + "-" + e.year;
        break;
      case "YYYY-MM-DD":
        r = e.year + "-" + n(e.month) + "-" + n(e.day);
        break;
      case "YYYY/MM/DD":
        r = e.year + "/" + n(e.month) + "/" + n(e.day);
        break;
      case "DD-MM-YYYY":
        r = n(e.day) + "-" + n(e.month) + "-" + e.year;
        break;
      case "DD/MM/YYYY":
        r = n(e.day) + "/" + n(e.month) + "/" + e.year;
        break;
      default:
        r = e.year + "-" + n(e.month) + "-" + n(e.day);
    }
    return r;
  }

  // sum array of years
  function sumArray(e) {
    let t = 0;
    return (
      e.forEach(function (e) {
        t += e;
      }),
      t
    );
  }

  // returns BS days count
  function bsDays(e, t) {
    let r = 0,
      a = 0;
    for (a = e.year; a <= t.year; a += 1) r += sumArray(scodusMonths[a]);
    for (a = 0; a < e.month; a += 1) r -= scodusMonths[e.year][a];
    for (r += scodusMonths[e.year][11], a = t.month - 1; a < 12; a += 1)
      r -= scodusMonths[t.year][a];
    r -= e.day + 1;
    r += t.day - 1;
    return r;
  }

  // add days in AD
  function adObject(e, days) {
    let n = new Date(changeFormat(e, "MM/DD/YYYY"));
    n.setDate(n.getDate() + days);
    return { year: n.getFullYear(), month: n.getMonth() + 1, day: n.getDate() };
  }

  // add days in BS
  function bsObject(e, days) {
    e.day += days;
    for (let i = 0; e.day > scodusMonths[e.year][e.month - 1]; i++) {
      e.day -= scodusMonths[e.year][e.month - 1];
      e.month += 1;
      if (e.month > 12) {
        e.month = 1;
        e.year += 1;
      }
    }
    return { year: e.year, month: e.month, day: e.day };
  }

  // Convert BS to AD
  function toAD(date, format = "YYYY-MM-DD") {
    const dateObject = destructureDate(date);
    let AD = bsDays(scodusRef, dateObject);
    const formattedDate = adObject(englishRef, AD);
    return changeFormat(formattedDate, format);
  }

  // convert AD to BS
  function toBS(date, format = "YYYY-MM-DD") {
    const dateObject = destructureDate(date);

    // returns AD days count with reference to epoch date
    let n = Date.UTC(dateObject.year, dateObject.month - 1, dateObject.day),
      r = Date.UTC(englishRef.year, englishRef.month - 1, englishRef.day);
    // millisecond to day
    let days = Math.abs((r - n) / 864e5);
    const formattedDate = bsObject({ ...scodusRef }, days);
    return changeFormat(formattedDate, format);
  }

  function calendar(month = 3, year = 2079, format = "YYYY-MM-DD") {
    const givenMonth = scodusMonths[year][month - 1];
    const startDate = toAD(`${parseInt(year)}-${parseInt(month)}-1`);
    const endDate = toAD(`${parseInt(year)}-${parseInt(month)}-${givenMonth}`);
    const startFormat = new Date(startDate);
    const endFormat = new Date(endDate);
    const startDay = startFormat.getDay();
    const endDay = endFormat.getDay();
    let days = [];
    let monthDays = [];
    for (let i = 1; i <= givenMonth; i++) {
      days.push({
        value: i,
        disable: false,
        date: changeFormat({ year: year, month: month, day: i }, format),
      });
    }
    let newYear, newMonth;
    if (month == 0) {
      newMonth = 11;
      newYear = parseInt(year) - 1;
    } else {
      newYear = year;
      newMonth = month - 1;
    }
    let prevMonth = scodusMonths[newYear][newMonth];
    for (let i = 0; i < startDay; i++) {
      days.unshift({ value: prevMonth - i, disable: true, date: null });
    }
    for (let i = 1; i <= 6 - endDay; i++) {
      days.push({ value: i, disable: true, date: null });
    }
    const weeks = Math.ceil(days.length / 7);
    for (let i = 1; i <= weeks; i++) {
      monthDays.push(days.slice((i - 1) * 7, i * 7));
    }
    return monthDays;
  }

  function currentNepaliDate() {
    const date = new Date();
    return toBS(date);
  }

  function getMonthName(monthKey) {
    return months[monthKey];
  }

  return {
    changeFormat: changeFormat,
    toBS: toBS,
    toAD: toAD,
    calendar: calendar,
    currentNepaliDate: currentNepaliDate,
    destructureDate: destructureDate,
    getMonthName: getMonthName,
  };
})();

export default DateConverter;

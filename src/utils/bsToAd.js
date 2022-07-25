var NepaliFunctions = (function () {
  "use strict";
  function e() {
    // returns year: 1970, month: 1, day: 1
    function e() {
      return p;
    }

    // returns year: 2099, month: 12, day: 30
    function t() {
      return f;
    }

    // sum array of passed  year
    function n(e) {
      var t = 0;
      return (
        e.forEach(function (e) {
          t += e;
        }),
        t
      );
    }

    // returns AD days count
    function a(e, t) {
      // Date.UTC returns the number of milliseconds between a date and January 1, 1970
      var n = Date.UTC(e.year, e.month - 1, e.day),
        r = Date.UTC(t.year, t.month - 1, t.day);
      // 1000*60*60*24 or 86400000 or 864e5
      return Math.abs((r - n) / 864e5);
    }

    // returns BS days count
    function o(e, t) {
      var r = 0,
        a = 0;
      for (a = e.year; a <= t.year; a += 1) r += n(c[a]);
      for (a = 0; a < e.month; a += 1) r -= c[e.year][a];
      for (r += c[e.year][11], a = t.month - 1; a < 12; a += 1)
        r -= c[t.year][a];
      r -= e.day + 1;
      r += t.day - 1;
      return r;
    }

    // add days in AD
    function i(e, t) {
      var n = new Date(r(e, "MM/DD/YYYY"));
      return (
        n.setDate(n.getDate() + t),
        { year: n.getFullYear(), month: n.getMonth() + 1, day: n.getDate() }
      );
    }

    // add days in BS
    function u(e, t) {
      e.day += t;
      for (let i = 0; e.day > c[e.year][e.month - 1]; i++) {
        e.day -= c[e.year][e.month - 1];
        e.month += 1;
        if (e.month > 12) {
          e.month = 1;
          e.year += 1;
        }
      }
      return { year: e.year, month: e.month, day: e.day };
    }

    // Convert BS to AD
    function d(e) {
      var t = o(m, e);
      return i(h, t);
    }

    // convert AD to BS
    function l(e) {
      var t = a(h, e);
      return u(m, t);
    }
    function s(e, t) {
      return c[e][t - 1];
    }
    var c = [],
      m = { year: 2e3, month: 9, day: 17 },
      h = { year: 1944, month: 1, day: 1 };
    c[1970] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1971] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
    c[1972] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[1973] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[1974] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1975] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[1976] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[1977] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31];
    c[1978] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1979] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[1980] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[1981] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
    c[1982] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1983] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[1984] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[1985] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
    c[1986] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1987] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[1988] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[1989] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1990] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1991] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
    c[1992] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[1993] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1994] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1995] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
    c[1996] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[1997] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1998] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[1999] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2e3] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2001] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2002] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2003] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2004] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2005] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2006] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2007] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2008] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
    c[2009] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2010] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2011] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2012] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
    c[2013] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2014] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2015] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2016] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
    c[2017] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2018] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2019] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2020] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2021] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2022] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
    c[2023] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2024] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2025] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2026] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2027] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2028] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2029] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
    c[2030] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2031] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2032] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2033] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2034] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2035] = [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
    c[2036] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2037] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2038] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2039] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
    c[2040] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2041] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2042] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2043] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
    c[2044] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2045] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2046] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2047] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2048] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2049] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
    c[2050] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2051] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2052] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2053] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
    c[2054] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2055] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2056] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
    c[2057] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2058] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2059] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2060] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2061] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2062] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31];
    c[2063] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2064] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2065] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2066] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
    c[2067] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2068] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2069] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2070] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
    c[2071] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2072] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2073] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
    c[2074] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2075] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2076] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
    c[2077] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
    c[2078] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2079] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
    c[2080] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
    c[2081] = [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2082] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2083] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2084] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2085] = [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30];
    c[2086] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2087] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
    c[2088] = [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30];
    c[2089] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2090] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2091] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
    c[2092] = [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2093] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2094] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2095] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30];
    c[2096] = [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
    c[2097] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    c[2098] = [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31];
    c[2099] = [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30];
    var p = { year: 1970, month: 1, day: 1 },
      f = { year: 2099, month: 12, day: 30 };
    return {
      minDate: e,
      maxDate: t,
      countAdDays: a,
      countBsDays: o,
      addBsDays: u,
      addAdDays: i,
      bs2ad: d,
      ad2bs: l,
      getDaysInMonth: s,
    };
  }
  function t(e) {
    function t(e) {
      var t = {},
        n = [],
        r = [];
      e.forEach(function (e, t) {
        var n = parseInt(e),
          a = { index: t, value: n, year: !1, month: !1, day: !1 };
        n > 0 && n > 999
          ? (a.year = !0)
          : n > 0 && n > 12
          ? (a.day = !0)
          : n > 0 && n <= 12 && (a.month = !0)((a.day = !0));
        r.push(a);
      });
      var a = r.filter(function (e) {
        return 1 == e.year;
      })[0];
      if (a) {
        (t.year = a.value)((n[a.index] = "YYYY"));
        var o = r.filter(function (e) {
            return 1 == e.day;
          }),
          i = r.filter(function (e) {
            return 1 == e.month;
          });
        1 == i.length
          ? (t.month = i[0].value)((n[i[0].index] = "MM"))(
              1 == o.length
                ? ((t.day = o[0].value), (n[o[0].index] = "DD"))
                : (o = o.find(function (e) {
                    return !e.month;
                  }))((t.day = o.value))((n[o.index] = "DD"))
            )
          : 2 == i.length && 0 == o.length
          ? (t.month = i[0].value)((t.day = i[1].value))(
              (n[i[0].index] = "MM")
            )((n[i[1].index] = "DD"))
          : 2 == i.length &&
            2 == o.length &&
            (t.month = o[0].value)((t.day = o[1].value))(
              (n[o[0].index] = "MM")
            )((n[o[1].index] = "DD"));
      }
      if (
        (t && NaN == t.year) ||
        null == t.year ||
        NaN == t.month ||
        null == t.month ||
        NaN == t.day ||
        null == t.day
      )
        (t = null)((n = null));
      else {
        var u = L(t.year, t.month);
        t.day > u && (t = null)((n = null));
      }
      return { parsedDate: t, parsedFormat: n };
    }
    var n = e.indexOf("/") > -1,
      r = e.indexOf("-") > -1,
      a = null;
    if (n) {
      var o = e.split("/");
      3 == o.length && (a = t(o))((a.parsedFormat = a.parsedFormat.join("/")));
    } else if (r) {
      var i = e.split("-");
      3 == i.length && (a = t(i))((a.parsedFormat = a.parsedFormat.join("-")));
    }
    return a;
  }
  function n(e, t) {
    var n = [],
      r = { year: null, month: null, day: null };
    switch (t) {
      case "MM/DD/YYYY":
        n = e.split("/");
        3 == n.length &&
          (r = {
            year: Number(n[2]),
            month: Number(n[0]),
            day: Number(n[1]),
          });
        break;
      case "MM-DD-YYYY":
        n = e.split("-");
        3 == n.length &&
          (r = {
            year: Number(n[2]),
            month: Number(n[0]),
            day: Number(n[1]),
          });
        break;
      case "YYYY-MM-DD":
        n = e.split("-");
        3 == n.length &&
          (r = {
            year: Number(n[0]),
            month: Number(n[1]),
            day: Number(n[2]),
          });
        break;
      case "YYYY/MM/DD":
        n = e.split("/");
        3 == n.length &&
          (r = {
            year: Number(n[0]),
            month: Number(n[1]),
            day: Number(n[2]),
          });
        break;
      case "DD-MM-YYYY":
        n = e.split("-");
        3 == n.length &&
          (r = {
            year: Number(n[2]),
            month: Number(n[1]),
            day: Number(n[0]),
          });
        break;
      case "DD/MM/YYYY":
        n = e.split("/");
        3 == n.length &&
          (r = {
            year: Number(n[2]),
            month: Number(n[1]),
            day: Number(n[0]),
          });
    }
    return (
      ((r && NaN == r.year) ||
        null == r.year ||
        NaN == r.month ||
        null == r.month ||
        NaN == r.day ||
        null == r.day) &&
        (r = null),
      r
    );
  }
  function r(e, t) {
    function n(e) {
      return (e = Number(e)), e < 10 ? "0" + e : e;
    }
    var r = "";
    switch ((t = t && J.indexOf(t) > -1 ? t : "YYYY-MM-DD")) {
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
    }
    return r;
  }
  function a(t) {
    console.log(t, "aaaaa");
    return new e().ad2bs(t);
  }
  function o(t) {
    return new e().bs2ad(t);
  }
  function i(t) {
    var n = new e(),
      r = n.minDate(),
      a = n.maxDate();
    if (
      t.year < r.year ||
      t.year > a.year ||
      t.month < r.month ||
      t.month > a.month ||
      t.day < r.day ||
      t.day > a.day
    )
      return !1;
    var o = L(t.year, t.month);
    return t.month > 0 && t.month <= 12 && t.day > 0 && t.day <= o;
  }
  function u() {
    var e = new Date();
    e.setHours(e.getHours() + 5);
    e.setMinutes(e.getMinutes() + 45);
    var t = (e.toDateString(), e.getUTCDate()),
      n = e.getUTCMonth() + 1;
    return { year: e.getUTCFullYear(), month: n, day: t };
  }
  function d() {
    var e = u();
    return Number(e.year);
  }
  function l() {
    var e = u();
    return Number(e.month);
  }
  function s() {
    var e = u();
    return Number(e.day);
  }
  function c() {
    return a(u());
  }
  function m() {
    var e = c();
    return Number(e.year);
  }
  function h() {
    var e = c();
    return Number(e.month);
  }
  function p() {
    var e = c();
    return Number(e.day);
  }
  function f() {
    return [
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
  }
  function y(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 11 ? null : f()[e];
  }
  function v() {
    return [
      "Baisakh",
      "Jestha",
      "Ashar",
      "Shrawan",
      "Bhadra",
      "Ashoj",
      "Kartik",
      "Mangsir",
      "Poush",
      "Magh",
      "Falgun",
      "Chaitra",
    ];
  }
  function g(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 11 ? null : v()[e];
  }
  function b() {
    return [
      "à¤¬à¥ˆà¤¶à¤¾à¤–",
      "à¤œà¥‡à¤ ",
      "à¤…à¤·à¤¾à¤¢",
      "à¤¶à¥à¤°à¤¾à¤µà¤£",
      "à¤­à¤¾à¤¦à¥à¤°",
      "à¤†à¤¶à¥à¤µà¤¿à¤¨",
      "à¤•à¤¾à¤°à¥à¤¤à¤¿à¤•",
      "à¤®à¤™à¥à¤¸à¤¿à¤°",
      "à¤ªà¥Œà¤·",
      "à¤®à¤¾à¤˜",
      "à¤«à¤¾à¤²à¥à¤—à¥à¤¨",
      "à¤šà¥ˆà¤¤à¥à¤°",
    ];
  }
  function D(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 11 ? null : b()[e];
  }
  function N() {
    return [
      "à¤†à¤‡à¤¤à¤µà¤¾à¤°",
      "à¤¸à¥‹à¤®à¤µà¤¾à¤°",
      "à¤®à¤™à¥à¤—à¤²à¤µà¤¾à¤°",
      "à¤¬à¥à¤§à¤µà¤¾à¤°",
      "à¤¬à¤¿à¤¹à¤¿à¤µà¤¾à¤°",
      "à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°",
      "à¤¶à¤¨à¤¿à¤µà¤¾à¤°",
    ];
  }
  function A(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 6 ? null : N()[Number(e)];
  }
  function M() {
    return ["à¤†", "à¤¸à¥‹", "à¤®à¤‚", "à¤¬à¥", "à¤¬à¤¿", "à¤¶à¥", "à¤¶"];
  }
  function Y() {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }
  function B() {
    return ["S", "M", "T", "W", "T", "F", "S"];
  }
  function C(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 6 ? null : Y()[Number(e)];
  }
  function E(e, t) {
    var n = [],
      r = "";
    return (
      t
        ? ((n = b()), (r = k(e.day) + " " + n[e.month - 1] + " " + k(e.year)))
        : ((n = v()), (r = e.day + " " + n[e.month - 1] + " " + e.year)),
      r
    );
  }
  function F(e) {
    return e.day + " " + NepaliFunctions.GetAdMonth(e.month - 1) + " " + e.year;
  }
  function T(e) {
    var t = NepaliFunctions.BS2AD(e);
    return (t = new Date(t.year, t.month - 1, t.day)), C(t.getDay());
  }
  function S(e) {
    var t = NepaliFunctions.BS2AD(e);
    return (t = new Date(t.year, t.month - 1, t.day)), A(t.getDay());
  }
  function I(e) {
    return (e = new Date(e.year, e.month - 1, e.day)), C(e.getDay());
  }
  function x(t, n) {
    var r = new e(),
      a = r.bs2ad(t);
    return (
      (a = new Date(a.year, a.month - 1, a.day)),
      a.setDate(a.getDate() + n),
      (a = {
        year: a.getFullYear(),
        month: a.getMonth() + 1,
        day: a.getDate(),
      }),
      r.ad2bs(a)
    );
  }
  function G(t, n) {
    return new e().countAdDays(t, n);
  }
  function w(t, n) {
    if (!i(t) || !i(n)) return !1;
    var r = new e();
    return (t = r.bs2ad(t)), (n = r.bs2ad(n)), r.countAdDays(t, n);
  }
  function O(e, t) {
    return new Date(e, t, 0).getDate();
  }
  function L(t, n) {
    var r = new e(),
      a = r.minDate(),
      o = r.maxDate();
    return (t < a.year || t > o.year) && (n < a.month || n > a.month)
      ? 0
      : r.getDaysInMonth(t, n);
  }
  function k(e) {
    e = e.toString();
    var t = "",
      n = 0;
    for (n = 0; n < e.length; n += 1)
      t += (function (e) {
        switch (e) {
          case "0":
            return "à¥¦";
          case "1":
            return "à¥§";
          case "2":
            return "à¥¨";
          case "3":
            return "à¥©";
          case "4":
            return "à¥ª";
          case "5":
            return "à¥«";
          case "6":
            return "à¥¬";
          case "7":
            return "à¥­";
          case "8":
            return "à¥®";
          case "9":
            return "à¥¯";
          default:
            return e;
        }
      })(e[n]);
    return t;
  }
  function j(e) {
    e = e.toString();
    for (var t = "", n = 0; n < e.length; )
      t += (function (e) {
        switch (e) {
          case "à¥¦":
            return 0;
          case "à¥§":
            return 1;
          case "à¥¨":
            return 2;
          case "à¥©":
            return 3;
          case "à¥ª":
            return 4;
          case "à¥«":
            return 5;
          case "à¥¬":
            return 6;
          case "à¥­":
            return 7;
          case "à¥®":
            return 8;
          case "à¥¯":
            return 9;
          default:
            return e;
        }
      })(e[n]);
    n++;
    return t;
  }
  function P(e) {
    return e < 10 ? "0" + Number(e) : e;
  }
  function U(e, t) {
    function n(e) {
      var t = {
        0: "",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: "Twenty",
        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety",
      };
      e = Number(e);
      var n = e.toString();
      return e < 20 ? t[e] : t[10 * n[0]] + " " + t[n[1]];
    }
    if (((e = e || 0), isNaN(e) || Math.floor(e).toString().length > 13))
      return null;
    var r = "",
      a = 0,
      o = e.toString();
    if (o.indexOf(".") > -1) {
      var i = o.split(".");
      a = Number(i[1]);
    }
    var u = Math.floor(e % 100),
      d = null;
    e.toString().length > 2 &&
      (d = e
        .toString()
        .substring(e.toString().length - 3, e.toString().length - 2));
    var l = Math.floor(e % 1e5);
    (l = l.toString())((l = l.substring(0, l.length - 3)));
    var s = Math.floor(e % 1e7);
    (s = s.toString())((s = s.substring(0, s.length - 5)));
    var c = Math.floor(e % 1e9);
    (c = c.toString())((c = c.substring(0, c.length - 7)));
    var m = Math.floor(e % 1e11);
    (m = m.toString())((m = m.substring(0, m.length - 9)));
    var h = Math.floor(e % 1e13);
    for (
      h = h.toString(),
        h = h.substring(0, h.length - 11),
        h > 0 && (r += n(h) + " Kharab"),
        m > 0 && (r += " " + n(m) + " Arab"),
        c > 0 && (r += " " + n(c) + " Crore"),
        s > 0 && (r += " " + n(s) + " Lakh"),
        l > 0 && (r += " " + n(l) + " Thousand"),
        d > 0 && (r += " " + n(d) + " Hundred"),
        u > 0 && (r += " " + n(u)),
        "" != r.trim() && t && (r += " Rupees"),
        a > 0 && t && (r += " and " + n(a) + " Paisa");
      r.indexOf("  ") > -1;

    )
      r = r.replace("  ", " ");
    return r.trim();
  }
  function H(e, t) {
    if (((e = e || 0), isNaN(e) || Math.floor(e).toString().length > 13))
      return null;
    var n = [
        "à¤¸à¥à¤¨à¥à¤¯",
        "à¤à¤•",
        "à¤¦à¥à¤ˆ",
        "à¤¤à¥€à¤¨",
        "à¤šà¤¾à¤°",
        "à¤ªà¤¾à¤à¤š",
        "à¤›",
        "à¤¸à¤¾à¤¤",
        "à¤†à¤ ",
        "à¤¨à¥Œ",
        "à¤¦à¤¸",
        "à¤à¤˜à¤¾à¤°",
        "à¤¬à¤¾à¤¹à¥à¤°",
        "à¤¤à¥‡à¤¹à¥à¤°",
        "à¤šà¥Œà¤§",
        "à¤ªà¤¨à¥à¤§à¥à¤°",
        "à¤¸à¥‹à¤¹à¥à¤°",
        "à¤¸à¤¤à¥à¤°",
        "à¤…à¤ à¤¾à¤¹à¥à¤°",
        "à¤‰à¤¨à¥à¤¨à¤¾à¤‡à¤¸",
        "à¤¬à¥€à¤¸",
        "à¤à¤•à¤¾à¤‡à¤¸",
        "à¤¬à¤¾à¤‡à¤¸",
        "à¤¤à¥‡à¤‡à¤¸",
        "à¤šà¥Œà¤¬à¥€à¤¸",
        "à¤ªà¤šà¥€à¤¸",
        "à¤›à¤¬à¥à¤¬à¥€à¤¸",
        "à¤¸à¤¤à¥à¤¤à¤¾à¤‡à¤¸",
        "à¤…à¤ à¥à¤ à¤¾à¤‡à¤¸",
        "à¤‰à¤¨à¤¨à¥à¤¤à¥€à¤¸",
        "à¤¤à¥€à¤¸",
        "à¤à¤•à¤¤à¥€à¤¸",
        "à¤¬à¤¤à¥€à¤¸",
        "à¤¤à¥‡à¤¤à¥€à¤¸",
        "à¤šà¥Œà¤¤à¥€à¤¸",
        "à¤ªà¥ˆà¤¤à¥€à¤¸",
        "à¤›à¤¤à¥€à¤¸",
        "à¤¸à¤°à¤¤à¥€à¤¸",
        "à¤…à¤°à¤¤à¥€à¤¸",
        "à¤‰à¤¨à¤¨à¤šà¤¾à¤²à¥€à¤¸",
        "à¤šà¤¾à¤²à¥€à¤¸",
        "à¤à¤•à¤šà¤¾à¤²à¥€à¤¸",
        "à¤¬à¤¯à¤¾à¤²à¤¿à¤¸",
        "à¤¤à¥€à¤°à¤šà¤¾à¤²à¥€à¤¸",
        "à¤šà¥Œà¤µà¤¾à¤²à¤¿à¤¸",
        "à¤ªà¥ˆà¤‚à¤¤à¤¾à¤²à¤¿à¤¸",
        "à¤›à¤¯à¤¾à¤²à¤¿à¤¸",
        "à¤¸à¤°à¤šà¤¾à¤²à¥€à¤¸",
        "à¤…à¤°à¤šà¤¾à¤²à¥€à¤¸",
        "à¤‰à¤¨à¤¨à¤šà¤¾à¤¸",
        "à¤ªà¤šà¤¾à¤¸",
        "à¤à¤•à¤¾à¤‰à¤¨à¥à¤¨",
        "à¤¬à¤¾à¤‰à¤¨à¥à¤¨",
        "à¤¤à¥à¤°à¤¿à¤ªà¤¨à¥à¤¨",
        "à¤šà¥Œà¤µà¤¨à¥à¤¨",
        "à¤ªà¤šà¥à¤ªà¤¨à¥à¤¨",
        "à¤›à¤ªà¤¨à¥à¤¨",
        "à¤¸à¤¨à¥à¤¤à¤¾à¤‰à¤¨à¥à¤¨",
        "à¤…à¤¨à¥à¤ à¤¾à¤‰à¤à¤¨à¥à¤¨",
        "à¤‰à¤¨à¤¾à¤¨à¥à¤¨à¥à¤¸à¤¾à¤ à¥€ ",
        "à¤¸à¤¾à¤ à¥€",
        "à¤à¤•à¤¸à¤¾à¤ à¥€",
        "à¤¬à¤¾à¤¸à¤¾à¤ à¥€",
        "à¤¤à¥€à¤°à¤¸à¤¾à¤ à¥€",
        "à¤šà¥Œà¤‚à¤¸à¤¾à¤ à¥€",
        "à¤ªà¥ˆà¤¸à¤¾à¤ à¥€",
        "à¤›à¥ˆà¤¸à¤ à¥€",
        "à¤¸à¤¤à¥à¤¸à¤ à¥à¤ à¥€",
        "à¤…à¤°à¥à¤¸à¤ à¥à¤ à¥€",
        "à¤‰à¤¨à¤¨à¥à¤¸à¤¤à¥à¤¤à¤°à¥€",
        "à¤¸à¤¤à¤°à¥€",
        "à¤à¤•à¤¹à¤¤à¥à¤¤à¤°",
        "à¤¬à¤¹à¤¤à¥à¤¤à¤°",
        "à¤¤à¥à¤°à¤¿à¤¹à¤¤à¥à¤¤à¤°",
        "à¤šà¥Œà¤¹à¤¤à¥à¤¤à¤°",
        "à¤ªà¤šà¤¹à¤¤à¥à¤¤à¤°",
        "à¤›à¤¹à¤¤à¥à¤¤à¤°",
        "à¤¸à¤¤à¥à¤¹à¤¤à¥à¤¤à¤°",
        "à¤…à¤ à¥à¤¹à¤¤à¥à¤¤à¤°",
        "à¤‰à¤¨à¤¾à¤¸à¥à¤¸à¥€",
        "à¤…à¤¸à¥à¤¸à¥€",
        "à¤à¤•à¤¾à¤¸à¥€",
        "à¤¬à¤¯à¤¾à¤¸à¥€",
        "à¤¤à¥à¤°à¥€à¤¯à¤¾à¤¸à¥€",
        "à¤šà¥Œà¤°à¤¾à¤¸à¥€",
        "à¤ªà¤šà¤¾à¤¸à¥€",
        "à¤›à¤¯à¤¾à¤¸à¥€",
        "à¤¸à¤¤à¤¾à¤¸à¥€",
        "à¤…à¤ à¤¾à¤¸à¥€",
        "à¤‰à¤¨à¤¾à¤¨à¥à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤à¤•à¤¾à¤¨à¥à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤¬à¤¯à¤¾à¤¨à¥à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤¤à¥à¤°à¤¿à¤¯à¤¾à¤¨à¥à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤šà¥Œà¤°à¤¾à¤¨à¥à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤ªà¤‚à¤šà¤¾à¤¨à¥à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤›à¤¯à¤¾à¤¨à¥à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤¸à¤¨à¥à¤¤à¤¾à¤¨à¥â€à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤…à¤¨à¥à¤ à¤¾à¤¨à¥à¤¨à¤¬à¥à¤¬à¥‡",
        "à¤‰à¤¨à¤¾à¤¨à¥à¤¸à¤¯",
      ],
      r = "",
      a = 0,
      o = "";
    if (((e = e.toString()), -1 != e.indexOf("."))) {
      var i = e.split(".");
      (e = i[0])((a = i[1]));
      var u = a.substring(0, 2).toString();
      1 == u.length &&
        (u = u.toString() + "0")(
          (o = n[parseInt(u)].toString() + " à¤ªà¥ˆà¤¸à¤¾")
        );
    }
    if (e.length > 13)
      return void alert("Number greater than kharab not supported");
    var d = Math.floor(e % 100),
      l = "";
    e.toString().length > 2 &&
      (l = e
        .toString()
        .substring(e.toString().length - 3, e.toString().length - 2));
    var s = Math.floor(e % 1e5);
    (s = s.toString())((s = s.substring(0, s.length - 3)));
    var c = Math.floor(e % 1e7);
    (c = c.toString())((c = c.substring(0, c.length - 5)));
    var m = Math.floor(e % 1e9);
    (m = m.toString())((m = m.substring(0, m.length - 7)));
    var h = Math.floor(e % 1e11);
    (h = h.toString())((h = h.substring(0, h.length - 9)));
    var p = Math.floor(e % 1e13);
    return (
      (p = p.toString()),
      (p = p.substring(0, p.length - 11)),
      p > 0 && (r += n[p] + " à¤–à¤°à¤¬"),
      h > 0 && (r += " " + n[h] + " à¤…à¤°à¤¬"),
      m > 0 && (r += " " + n[m] + " à¤•à¤°à¥‹à¤¡"),
      c > 0 && (r += " " + n[c] + " à¤²à¤¾à¤–"),
      s > 0 && (r += " " + n[s] + " à¤¹à¤œà¤¾à¤°"),
      l > 0 && (r += " " + n[l] + " à¤¸à¤¯"),
      d > 0 && (r += " " + n[d]),
      "" != r.trim() && t && (r += " à¤°à¥à¤ªà¥ˆà¤‚à¤¯à¤¾"),
      a > 0 && t && (r += ("" != r.trim() ? " " : "") + o),
      r.trim()
    );
  }
  function R(e, t) {
    if (i(e) && i(t)) {
      (e = this.BS2AD(e))((t = this.BS2AD(t)));
      var n = new Date(e.year, e.month - 1, e.day),
        r = new Date(t.year, t.month - 1, t.day);
      return n.getTime() > r.getTime();
    }
    return (
      1e4 * e.year + 100 * e.month + e.day >
      1e4 * t.year + 100 * t.month + t.day
    );
  }
  var J = [
    "MM-DD-YYYY",
    "MM/DD/YYYY",
    "YYYY-MM-DD",
    "YYYY/MM/DD",
    "DD-MM-YYYY",
    "DD/MM/YYYY",
  ];
  return {
    ParseDate: t,
    ValidateBsDate: i,
    CompareBsDates: R,
    ConvertToDateObject: n,
    ConvertDateFormat: r,
    AD2BS: a,
    BS2AD: o,
    GetCurrentAdDate: u,
    GetCurrentAdYear: d,
    GetCurrentAdMonth: l,
    GetCurrentAdDay: s,
    GetCurrentBsDate: c,
    GetCurrentBsYear: m,
    GetCurrentBsMonth: h,
    GetCurrentBsDay: p,
    GetAdMonths: f,
    GetAdMonth: y,
    GetBsMonths: v,
    GetBsMonth: g,
    GetBsDaysUnicode: N,
    GetBsDaysUnicodeShort: M,
    GetBsDayUnicode: A,
    GetAdDays: Y,
    GetAdDaysShort: B,
    GetAdDay: C,
    GetBsMonthsInUnicode: b,
    GetBsMonthInUnicode: D,
    GetDaysInAdMonth: O,
    GetDaysInBsMonth: L,
    AdDatesDiff: G,
    BsDatesDiff: w,
    BsAddDays: x,
    GetBsFullDate: E,
    GetAdFullDate: F,
    GetAdFullDay: I,
    GetBsFullDay: T,
    GetBsFullDayInUnicode: S,
    ConvertToUnicode: k,
    ConvertToNumber: j,
    Get2DigitNo: P,
    NumberToWords: U,
    NumberToWordsUnicode: H,
  };
})();
// !(function () {
//   function e(e, t) {
//     var n = e,
//       r = t + 1;
//     return r > 12 && ((n += 1), (r = 1)), { year: n, month: r };
//   }
//   function t(e, t) {
//     var n = e,
//       r = t - 1;
//     return r < 1 && ((n -= 1), (r = 12)), { year: n, month: r };
//   }
//   function n() {
//     B = !0;
//   }
//   function r() {
//     B = !1;
//   }
//   function a(e) {
//     var t = document.getElementById("ndp-nepali-box");
//     t && t.remove(), (Y = !1);
//   }
//   function o(e) {
//     var t = {};
//     if (Y) a("showNdpCalendarBox");
//     else {
//       var n = document.getElementById(e);
//       A(e), (t = b(e)), (E = e);
//       var r = n.value;
//       t.unicodeDate && (r = NepaliFunctions.ConvertToNumber(r));
//       var o = "";
//       r
//         ? (o = NepaliFunctions.ConvertToDateObject(r, t.dateFormat))
//         : ((o = NepaliFunctions.GetCurrentBsDate()),
//           t.disableAfter &&
//             NepaliFunctions.CompareBsDates(o, t.disableAfter) &&
//             (o = t.disableAfter));
//       var u = null;
//       null == o
//         ? ((o = NepaliFunctions.GetCurrentBsDate()), (u = ""))
//         : (u = NepaliFunctions.ConvertDateFormat(o, "YYYY-MM-DD"));
//       i(o.year, o.month, u), d(n), (Y = !0);
//     }
//   }
//   function i(n, r, a) {
//     var o = document.getElementById("ndp-nepali-box"),
//       d = b(null),
//       l = "english" == d.language,
//       s = o.getElementsByTagName("table")[0].getElementsByTagName("tbody");
//     s.length > 0 && s[0].parentNode.removeChild(s[0]);
//     var c = d.ndpYearCount || 0,
//       m = document.getElementById("currentMonth");
//     m.innerHTML = "";
//     var h = document.createElement("SPAN");
//     h.innerHTML = " ";
//     var p = document.createElement("SPAN");
//     p.innerHTML = l
//       ? NepaliFunctions.GetBsMonth(r - 1)
//       : NepaliFunctions.GetBsMonthInUnicode(r - 1);
//     var v = document.createElement("SPAN");
//     (v.innerHTML = l ? n : NepaliFunctions.ConvertToUnicode(n)),
//       d.ndpMonth && d.ndpYear
//         ? (m.appendChild(f(r, n, a)), m.appendChild(y(r, n, c, a)))
//         : d.ndpMonth
//         ? (m.appendChild(f(r, n, a)), m.appendChild(h), m.appendChild(v))
//         : d.ndpYear
//         ? (m.appendChild(p), m.appendChild(h), m.appendChild(y(r, n, c, a)))
//         : (m.appendChild(p), m.appendChild(h), m.appendChild(v));
//     var g = e(n, r),
//       D = t(n, r),
//       N = g.year,
//       A = g.month,
//       M = D.year,
//       Y = D.month,
//       B = document.getElementById("ndp-header"),
//       C = document.getElementById("prev");
//     C && C.parentNode.removeChild(C);
//     var E = document.getElementById("next");
//     E && E.parentNode.removeChild(E);
//     var F = !0;
//     d.disableBefore &&
//       NepaliFunctions.CompareBsDates(d.disableBefore, {
//         year: M,
//         month: Y,
//         day: NepaliFunctions.GetDaysInBsMonth(M, Y),
//       }) &&
//       (F = !1);
//     var T = document.createElement("SPAN");
//     T.setAttribute("class", "ndc-chevron ndc-left");
//     var S = document.createElement("A");
//     S.setAttribute("id", "prev"),
//       S.setAttribute("title", "Previous Month"),
//       S.setAttribute("class", F ? "ndp-prev" : "ndp-prev ndp-disabled"),
//       S.setAttribute("href", "javascript:void(0)"),
//       S.appendChild(T),
//       F &&
//         S.addEventListener("click", function () {
//           i(M, Y, a);
//         });
//     var I = !0;
//     d.disableAfter &&
//       NepaliFunctions.CompareBsDates(
//         { year: N, month: A, day: 1 },
//         d.disableAfter
//       ) &&
//       (I = !1);
//     var x = document.createElement("SPAN");
//     x.setAttribute("class", "ndc-chevron ndc-right");
//     var G = document.createElement("A");
//     G.setAttribute("id", "next"),
//       G.setAttribute("title", "Next Month"),
//       G.setAttribute("class", I ? "ndp-next" : "ndp-next ndp-disabled"),
//       G.setAttribute("href", "javascript:void(0)"),
//       G.appendChild(x),
//       I &&
//         G.addEventListener("click", function () {
//           i(N, A, a);
//         }),
//       B.appendChild(S),
//       B.appendChild(G),
//       o
//         .getElementsByTagName("table")[0]
//         .insertAdjacentElement("beforeend", u(n, r, a));
//   }
//   function u(e, t, n) {
//     var r,
//       a,
//       o,
//       i = b(null),
//       u = "english" == i.language;
//     if (n) {
//       var d = NepaliFunctions.ConvertToDateObject(n, "YYYY-MM-DD");
//       (r = d.year), (a = d.month), (o = d.day);
//     }
//     var l = NepaliFunctions.GetCurrentBsDate(),
//       s = l.year,
//       c = l.month,
//       m = l.day,
//       h = NepaliFunctions.GetDaysInBsMonth(e, t),
//       f = { year: e, month: t, day: 1 },
//       y = NepaliFunctions.BS2AD(f),
//       v = y.year,
//       g = y.month,
//       D = y.day,
//       N = new Date(v, g - 1, D),
//       A = N.getDay(),
//       M = 0,
//       Y = 0,
//       B = A + h,
//       C = "",
//       E = "",
//       F = 0;
//     "object" != typeof i.disableBefore &&
//       i.disableBefore &&
//       i.dateFormat &&
//       (i.disableBefore = NepaliFunctions.ConvertToDateObject(
//         i.disableBefore,
//         i.dateFormat
//       )),
//       "object" != typeof i.disableAfter &&
//         i.disableAfter &&
//         i.dateFormat &&
//         (i.disableAfter = NepaliFunctions.ConvertToDateObject(
//           i.disableAfter,
//           i.dateFormat
//         )),
//       !i.disableBefore &&
//         Number.isInteger(i.disableDaysBefore) &&
//         parseInt(i.disableDaysBefore) >= 0 &&
//         (i.disableBefore = NepaliFunctions.BsAddDays(
//           NepaliFunctions.GetCurrentBsDate(),
//           -1 * parseInt(i.disableDaysBefore)
//         )),
//       !i.disableAfter &&
//         Number.isInteger(i.disableDaysAfter) &&
//         parseInt(i.disableDaysAfter) >= 0 &&
//         (i.disableAfter = NepaliFunctions.BsAddDays(
//           NepaliFunctions.GetCurrentBsDate(),
//           parseInt(i.disableDaysAfter)
//         ));
//     for (
//       var T = document.createElement("TBODY"),
//         S = document.createElement("TR"),
//         I = document.createElement("TD"),
//         x = document.createElement("A");
//       Y < B;

//     ) {
//       if (
//         ((M = Y),
//         M % 7 == 0 && (S = document.createElement("TR")),
//         (F = M - A + 1),
//         (E =
//           e.toString() +
//           "-" +
//           NepaliFunctions.Get2DigitNo(t) +
//           "-" +
//           NepaliFunctions.Get2DigitNo(F)),
//         (C = ""),
//         (C =
//           e === r && t === a && F === o
//             ? "ndp-selected"
//             : e === s && t === c && F === m
//             ? "ndp-current"
//             : "ndp-date"),
//         M < A)
//       )
//         (I = document.createElement("TD")), S.appendChild(I);
//       else {
//         if (
//           ((I = document.createElement("TD")),
//           I.setAttribute("class", C),
//           (i.disableAfter &&
//             NepaliFunctions.CompareBsDates(
//               NepaliFunctions.ConvertToDateObject(E, "YYYY-MM-DD"),
//               i.disableAfter
//             )) ||
//             (i.disableBefore &&
//               NepaliFunctions.CompareBsDates(
//                 i.disableBefore,
//                 NepaliFunctions.ConvertToDateObject(E, "YYYY-MM-DD")
//               )))
//         )
//           (x = document.createElement("A")),
//             x.setAttribute("class", "ndp-disabled"),
//             x.setAttribute("href", "javascript:void(0)"),
//             x.setAttribute("title", E),
//             (x.innerHTML = u ? F : NepaliFunctions.ConvertToUnicode(F)),
//             I.appendChild(x);
//         else {
//           var G = NepaliFunctions.ConvertToDateObject(E, "YYYY-MM-DD"),
//             w = NepaliFunctions.ConvertDateFormat(G, i.dateFormat);
//           (x = document.createElement("A")),
//             x.setAttribute("href", "javascript:void(0)"),
//             x.setAttribute("title", E),
//             x.setAttribute("data-value", w),
//             (x.innerHTML = u ? F : NepaliFunctions.ConvertToUnicode(F)),
//             x.addEventListener("click", function () {
//               p(this);
//             }),
//             I.appendChild(x);
//         }
//         S.appendChild(I);
//       }
//       M % 7 == 6 && (T.appendChild(S), (S = document.createElement("TR"))),
//         (Y += 1);
//     }
//     return S.children.length > 0 && T.appendChild(S), T;
//   }
//   function d(e) {
//     var t = l(e),
//       n = m(t),
//       r = h(e, t),
//       a = document.getElementById("ndp-nepali-box"),
//       o = a.offsetHeight,
//       i = t.y + e.offsetHeight;
//     r < o && r < n && (i = i - o - e.offsetHeight),
//       (a.style.top = i + "px"),
//       (a.style.left = t.x + "px");
//   }
//   function l(e) {
//     if ("body" != b().container) {
//       var t = e.getBoundingClientRect();
//       return { x: t.x, y: t.y };
//     }
//     var n = 0,
//       r = 0;
//     return (n += s(e)), (r += c(e)), { x: n, y: r };
//   }
//   function s(e) {
//     for (var t = 0; e; ) (t += e.offsetLeft), (e = e.offsetParent);
//     return (t += document.firstChild.offsetLeft || 0);
//   }
//   function c(e) {
//     for (var t = 0; e; ) (t += e.offsetTop), (e = e.offsetParent);
//     return (t += document.firstChild.offsetTop || 0);
//   }
//   function m(e) {
//     var t =
//       window.pageYOffset ||
//       (document.documentElement || document.body.parentNode || document.body)
//         .scrollTop;
//     return e.y - t;
//   }
//   function h(e, t) {
//     var n =
//       window.pageYOffset ||
//       (document.documentElement || document.body.parentNode || document.body)
//         .scrollTop;
//     return window.innerHeight - t.y - e.offsetHeight + n;
//   }
//   function p(e) {
//     var t = e.getAttribute("data-value"),
//       n = b(),
//       r = NepaliFunctions.ConvertToDateObject(t, n.dateFormat);
//     n.ndpEnglishInput &&
//       (document.getElementById(n.ndpEnglishInput).value =
//         NepaliFunctions.ConvertDateFormat(
//           NepaliFunctions.BS2AD(r),
//           n.dateFormat
//         )),
//       (document.getElementById(E).value = n.unicodeDate
//         ? NepaliFunctions.ConvertToUnicode(t)
//         : t),
//       n.onChange &&
//         n.onChange({
//           bs: t,
//           ad: NepaliFunctions.ConvertDateFormat(
//             NepaliFunctions.BS2AD(r),
//             n.dateFormat
//           ),
//           object: r,
//         }),
//       a("setSelectedDay");
//   }
//   function f(e, t, n) {
//     var r = b(),
//       a = "english" == r.language,
//       o = 1,
//       i = 12;
//     r.disableBefore && r.disableBefore.year == t && (o = r.disableBefore.month),
//       r.disableAfter && r.disableAfter.year == t && (i = r.disableAfter.month);
//     var u = a
//         ? NepaliFunctions.GetBsMonths()
//         : NepaliFunctions.GetBsMonthsInUnicode(),
//       d = document.createElement("SELECT");
//     return (
//       d.setAttribute("id", "ndp-month-select"),
//       u.forEach(function (t, n) {
//         if (n >= o - 1 && n <= i - 1) {
//           var r = document.createElement("OPTION");
//           r.setAttribute("value", n + 1),
//             (r.innerHTML = t),
//             n + 1 == e && r.setAttribute("selected", "selected"),
//             d.appendChild(r);
//         }
//       }),
//       d.addEventListener("change", function () {
//         v(t, n);
//       }),
//       d
//     );
//   }
//   function y(e, t, n, r) {
//     var a = b(),
//       o = "english" == a.language,
//       i = 1970,
//       u = 2099;
//     a.disableBefore && a.disableBefore.year > i && (i = a.disableBefore.year),
//       a.disableAfter && a.disableAfter.year < u && (u = a.disableAfter.year);
//     var d = document.createElement("SELECT");
//     d.setAttribute("id", "ndp-year-select");
//     for (
//       var l =
//           Math.round(n / 2) > 0 && parseInt(t) - Math.round(n / 2) >= i
//             ? parseInt(t) - Math.round(n / 2)
//             : i,
//         s =
//           Math.round(n / 2) > 0 && parseInt(t) + Math.round(n / 2) <= u
//             ? parseInt(t) + Math.round(n / 2)
//             : u;
//       l <= s;

//     ) {
//       var c = document.createElement("OPTION");
//       c.setAttribute("value", l),
//         (c.innerHTML = o ? l : NepaliFunctions.ConvertToUnicode(l)),
//         t == l && c.setAttribute("selected", "selected"),
//         d.appendChild(c),
//         (l += 1);
//     }
//     return (
//       d.addEventListener("change", function () {
//         g(e, r);
//       }),
//       d
//     );
//   }
//   function v(e, t) {
//     (e = b().ndpYear
//       ? parseInt(document.getElementById("ndp-year-select").value)
//       : e),
//       i(e, parseInt(document.getElementById("ndp-month-select").value), t);
//   }
//   function g(e, t) {
//     var n = b(),
//       r = document.getElementById("ndp-year-select"),
//       a = document.getElementById("ndp-month-select"),
//       o = parseInt(r.value);
//     e = n.ndpMonth ? parseInt(a.value) : e;
//     var u = n.disableDaysBefore,
//       d = n.disableDaysAfter;
//     u && u.year == o && e <= u.month && (e = u.month),
//       d && d.year == o && e >= d.month && (e = d.month),
//       i(o, e, t);
//   }
//   function b(e) {
//     var t = {};
//     if ((e || (e = E), e)) {
//       var n = C[e],
//         r = n.dateFormat || "YYYY-MM-DD",
//         a = n.disableBefore
//           ? NepaliFunctions.ConvertToDateObject(n.disableBefore, r)
//           : { year: 1970, month: 1, day: 1 },
//         o = n.disableAfter
//           ? NepaliFunctions.ConvertToDateObject(n.disableAfter, r)
//           : { year: 2099, month: 12, day: 30 },
//         i = n.disableDaysBefore || (0 == n.disableDaysBefore ? 0 : null),
//         u = n.disableDaysAfter || (0 == n.disableDaysAfter ? 0 : null);
//       Number.isInteger(i) &&
//         i >= 0 &&
//         (a = NepaliFunctions.BsAddDays(
//           NepaliFunctions.GetCurrentBsDate(),
//           -1 * i
//         )),
//         Number.isInteger(u) &&
//           u >= 0 &&
//           (o = NepaliFunctions.BsAddDays(
//             NepaliFunctions.GetCurrentBsDate(),
//             u
//           )),
//         n &&
//           (t = {
//             ndpTriggerButton: n.ndpTriggerButton || null,
//             ndpTriggerButtonClass: n.ndpTriggerButtonClass || null,
//             ndpTriggerButtonText: n.ndpTriggerButtonText || null,
//             ndpEnglishInput: n.ndpEnglishInput || null,
//             ndpYearCount: n.ndpYearCount || null,
//             ndpYear: n.ndpYear || null,
//             ndpMonth: n.ndpMonth || null,
//             disableDaysBefore: i,
//             disableDaysAfter: u,
//             disableBefore: a,
//             disableAfter: o,
//             dateFormat: r,
//             onChange: n.onChange || null,
//             unicodeDate: n.unicodeDate || null,
//             readOnlyInput: n.readOnlyInput || !1,
//             container: n.container || "body",
//             language: n.language || "nepali",
//           });
//     }
//     return t;
//   }
//   function D() {
//     var e = document.activeElement,
//       t = e.getAttribute("id");
//     a("ndpInputOnFocus"), o(t);
//   }
//   function N() {
//     var e = window.event || arguments.callee.caller.arguments[0];
//     27 == e.which && (a("ndpKeyDown-Esc"), e.stopPropagation());
//   }
//   function A(e) {
//     if (!document.getElementById("ndp-nepali-box")) {
//       var t = b(e);
//       document
//         .querySelector(t.container)
//         .insertAdjacentElement("beforeend", M(t));
//       var a = document.getElementById("ndp-nepali-box");
//       a.addEventListener("mouseenter", n), a.addEventListener("mouseleave", r);
//     }
//   }
//   function M(e) {
//     var t = "english" == e.language,
//       n = document.createElement("DIV");
//     n.setAttribute("id", "ndp-nepali-box"),
//       n.setAttribute("tabindex", "-1"),
//       n.setAttribute("class", "ndp-corner-all"),
//       n.addEventListener("keydown", N);
//     var r = document.createElement("DIV");
//     r.setAttribute("id", "ndp-header"),
//       r.setAttribute("class", "ndp-corner-all ndp-header");
//     var a = document.createElement("SPAN");
//     a.setAttribute("id", "currentMonth"), r.appendChild(a);
//     var o = document.createElement("DIV");
//     o.setAttribute("id", "currentMonth");
//     var i = document.createElement("TABLE");
//     o.setAttribute("id", "ndp-table");
//     var u = document.createElement("TR");
//     u.setAttribute("class", "ndp-days"),
//       (t
//         ? NepaliFunctions.GetAdDaysShort()
//         : NepaliFunctions.GetBsDaysUnicodeShort()
//       ).forEach(function (e) {
//         var t = document.createElement("TH");
//         (t.innerHTML = e), u.appendChild(t);
//       });
//     var d = document.createElement("THEAD");
//     d.appendChild(u);
//     var l = document.createElement("TBODY");
//     return (
//       i.appendChild(d),
//       i.appendChild(l),
//       o.appendChild(i),
//       n.appendChild(r),
//       n.appendChild(o),
//       n
//     );
//   }
//   var Y = !1,
//     B = !1,
//     C = [],
//     E = null;
//   (Object.prototype.nepaliDatePicker = function (e) {
//     function t(e) {
//       e.classList.remove("ndp-nepali-calendar"),
//         e.removeAttribute("ndp-calendar-data"),
//         e.removeAttribute("readonly"),
//         e.removeEventListener("focus", D),
//         e.removeEventListener("mouseenter", n),
//         e.removeEventListener("mouseleave", r),
//         e.removeEventListener("keydown", N);
//       var t = e.getAttribute("id");
//       delete C[t];
//       var a = e.nextSibling;
//       a &&
//         "BUTTON" == a.tagName &&
//         "ndp-click-trigger" == a.getAttribute("id") &&
//         a.parentNode.removeChild(a);
//     }
//     function i(e, t) {
//       var n = e.getAttribute("id");
//       if (((C[n] = t), (C[n].raw = u(t)), e.value)) {
//         var r = NepaliFunctions.ParseDate(e.value);
//         r &&
//           r.parsedFormat &&
//           (t.dateFormat = t.dateFormat ? t.dateFormat : r.parsedFormat);
//       }
//     }
//     function u(e) {
//       if (null == e || "object" != typeof e) return e;
//       var t = e.constructor();
//       for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
//       return t;
//     }
//     function d(e, t) {
//       for (var n = !1; e; ) {
//         e.getAttribute("id") == t && ((n = !0), (e = null)),
//           (e = e ? e.offsetParent : null);
//       }
//       return n;
//     }
//     function l() {
//       var e = document.getElementById(E),
//         t = document.activeElement,
//         n = e == t,
//         r = d(t, "ndp-nepali-box"),
//         o = "ndp-click-trigger" == t.getAttribute("id"),
//         i =
//           "ndp-month-select" == t.getAttribute("id") ||
//           "ndp-year-select" == t.getAttribute("id");
//       ("BODY" == t.tagName || r || o) && (n = !0),
//         Y && ((!B && !i) || (B && !n)) && a("ndpInputOnBlur");
//     }
//     function s(e, t) {
//       var n = e.getAttribute("id");
//       if (null == n) {
//         var r = btoa(new Date().toISOString() + Math.random());
//         e.setAttribute("id", r);
//       }
//       if (
//         (e.classList.add("ndp-nepali-calendar"),
//         i(e, t),
//         t.ndpTriggerButton || e.addEventListener("focus", D),
//         e.addEventListener("blur", l),
//         e.setAttribute("autocomplete", "off"),
//         e.addEventListener("keydown", N),
//         t.readOnlyInput && e.setAttribute("readonly", "readonly"),
//         t.ndpTriggerButton)
//       ) {
//         var a =
//             t.ndpTriggerButtonClass && "" !== t.ndpTriggerButtonClass
//               ? t.ndpTriggerButtonClass
//               : "",
//           o =
//             t.ndpTriggerButtonText && "" !== t.ndpTriggerButtonText
//               ? t.ndpTriggerButtonText
//               : "Pick Date",
//           u = document.createElement("BUTTON");
//         u.setAttribute("id", "ndp-click-trigger"),
//           u.setAttribute("class", a),
//           u.addEventListener("click", function () {
//             h(n);
//           }),
//           u.addEventListener("blur", c),
//           (u.innerHTML = o),
//           e.insertAdjacentElement("afterend", u);
//       }
//     }
//     function c() {
//       l();
//     }
//     function m() {
//       var e = document.getElementById("ndp-nepali-box");
//       return e && parseInt(e.style.top) > 0;
//     }
//     function h(e) {
//       v || ((v = !0), m() ? a("toggleCalendar") : o(e), (v = !1));
//     }
//     var p = this;
//     if ("remove" != e) {
//       if (((e = void 0 === e ? {} : e), p.length && p.length > 0))
//         for (var f = 0; f < p.length; f++) s(p[f], e);
//       else s(p, e);
//       var y = document.querySelectorAll(".ndp-nepali-calendar");
//       if (y.length > 0)
//         for (var f = 0; f < y.length; f++)
//           y[f].addEventListener("mouseenter", n),
//             y[f].addEventListener("mouseleave", r);
//       window.addEventListener("mouseup", function () {
//         if (m()) {
//           "ndp-click-trigger" == document.activeElement.getAttribute("id") ||
//             l();
//         }
//       });
//       var v = !1;
//     } else if (p.length && p.length > 0)
//       for (var f = 0; f < p.length; f++) t(p[f]);
//     else t(p);
//   }),
//     Object.defineProperty(Object.prototype, "nepaliDatePicker", {
//       enumerable: !1,
//       value: nepaliDatePicker,
//     });
// })();

export default NepaliFunctions;

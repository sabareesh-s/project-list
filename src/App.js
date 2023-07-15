import "./App.css";
import LoggedHours from "./Components/LoggedHours";
import { useState, useEffect } from 'react'

function App() {

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  }

  const [mode, setMode] = useState(getInitialTheme);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? "dark" : "light";
        console.log(colorScheme);
        setMode(colorScheme);
      });
  }, []);

  const projectData=[
    {
      "tsid": 1,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "01:00",
      "dateworked": "11-01-2019",
      "status": "Submitted"
    },
    {
      "tsid": 2,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "03:00",
      "dateworked": "11-01-2019",
      "status": "Submitted"
    },
    {
      "tsid": 11,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "06:00",
      "dateworked": "11-01-2019",
      "status": "Rejected"
    },
    {
      "tsid": 12,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "01:00",
      "dateworked": "04-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 13,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "02:00",
      "dateworked": "17-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 14,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "03:00",
      "dateworked": "17-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 15,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 4,
      "wbsname": "Stores",
      "hrsworked": "05:00",
      "dateworked": "17-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 34,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "07:00",
      "dateworked": "03-08-2020",
      "status": "Rejected"
    },
    {
      "tsid": 35,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "03:00",
      "dateworked": "03-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 36,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 24,
      "wbsname": "Design Ageing report",
      "hrsworked": "08:00",
      "dateworked": "03-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 38,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 23,
      "wbsname": "Plot charts",
      "hrsworked": "04:00",
      "dateworked": "02-08-2020",
      "status": "Rejected"
    },
    {
      "tsid": 40,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "06:00",
      "dateworked": "02-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 41,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "04:00",
      "dateworked": "02-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 45,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "06:00",
      "dateworked": "01-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 46,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "05:00",
      "dateworked": "01-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 52,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 23,
      "wbsname": "Plot charts",
      "hrsworked": "07:00",
      "dateworked": "04-08-2020",
      "status": "Approved"
    },
    {
      "tsid": 55,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "05:00",
      "dateworked": "06-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 57,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "06:00",
      "dateworked": "09-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 58,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "08:00",
      "dateworked": "09-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 59,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "03:00",
      "dateworked": "10-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 60,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "02:00",
      "dateworked": "10-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 61,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 4,
      "wbsname": "Stores",
      "hrsworked": "01:00",
      "dateworked": "10-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 62,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "03:00",
      "dateworked": "11-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 63,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "05:00",
      "dateworked": "11-08-2020",
      "status": "Rejected"
    },
    {
      "tsid": 64,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 23,
      "wbsname": "Plot charts",
      "hrsworked": "06:00",
      "dateworked": "11-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 65,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "02:00",
      "dateworked": "03-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 102,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "02:00",
      "dateworked": "10-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 106,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "04:00",
      "dateworked": "05-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 107,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "04:00",
      "dateworked": "05-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 108,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "08:00",
      "dateworked": "05-08-2020",
      "status": "Rejected"
    },
    {
      "tsid": 109,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 4,
      "wbsname": "Stores",
      "hrsworked": "04:00",
      "dateworked": "05-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 117,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "02:00",
      "dateworked": "12-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 118,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "09:00",
      "dateworked": "12-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 130,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "02:00",
      "dateworked": "14-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 132,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "05:00",
      "dateworked": "13-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 137,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "02:00",
      "dateworked": "14-08-2020",
      "status": "Submitted"
    },
    {
      "tsid": 145,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 4,
      "wbsname": "Stores",
      "hrsworked": "05:00",
      "dateworked": "17-12-2020",
      "status": "Submitted"
    },
    {
      "tsid": 148,
      "projectid": 3,
      "projectname": "Bizprout",
      "wbsid": 21,
      "wbsname": "Fetch Data from Tally",
      "hrsworked": "05:00",
      "dateworked": "17-01-2021",
      "status": "Rejected"
    },
    {
      "tsid": 150,
      "projectid": 3,
      "projectname": "Bizprout",
      "wbsid": 25,
      "wbsname": "Accounts",
      "hrsworked": "03:00",
      "dateworked": "20-01-2021",
      "status": "Submitted"
    },
    {
      "tsid": 151,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "05:00",
      "dateworked": "11-01-2019",
      "status": "Submitted"
    },
    {
      "tsid": 152,
      "projectid": 3,
      "projectname": "Bizprout",
      "wbsid": 26,
      "wbsname": "Payroll",
      "hrsworked": "05:00",
      "dateworked": "26-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 153,
      "projectid": 3,
      "projectname": "Bizprout",
      "wbsid": 23,
      "wbsname": "Plot charts",
      "hrsworked": "07:00",
      "dateworked": "26-03-2021",
      "status": "Rejected"
    },
    {
      "tsid": 154,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 5,
      "wbsname": "Production",
      "hrsworked": "04:00",
      "dateworked": "26-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 155,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 8,
      "wbsname": "Payment Process",
      "hrsworked": "05:00",
      "dateworked": "26-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 156,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 9,
      "wbsname": "Reports",
      "hrsworked": "04:00",
      "dateworked": "26-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 157,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 10,
      "wbsname": "MIS Reports",
      "hrsworked": "03:00",
      "dateworked": "26-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 158,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 11,
      "wbsname": "Emailing",
      "hrsworked": "05:00",
      "dateworked": "26-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 163,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 12,
      "wbsname": "Access Control",
      "hrsworked": "05:00",
      "dateworked": "26-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 164,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 13,
      "wbsname": "Fixed Asset Module",
      "hrsworked": "05:00",
      "dateworked": "26-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 165,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 5,
      "wbsname": "Production",
      "hrsworked": "05:00",
      "dateworked": "25-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 166,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 8,
      "wbsname": "Payment Process",
      "hrsworked": "05:00",
      "dateworked": "25-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 167,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 9,
      "wbsname": "Reports",
      "hrsworked": "05:00",
      "dateworked": "25-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 168,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 10,
      "wbsname": "MIS Reports",
      "hrsworked": "05:00",
      "dateworked": "25-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 169,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 11,
      "wbsname": "Emailing",
      "hrsworked": "05:00",
      "dateworked": "25-03-2021",
      "status": "Submitted"
    },
    {
      "tsid": 170,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "02:15",
      "dateworked": "12-02-2022",
      "status": "Submitted"
    },
    {
      "tsid": 171,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "02:30",
      "dateworked": "12-02-2022",
      "status": "Submitted"
    },
    {
      "tsid": 172,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 23,
      "wbsname": "Plot charts",
      "hrsworked": "03:00",
      "dateworked": "12-02-2022",
      "status": "Submitted"
    },
    {
      "tsid": 173,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 22,
      "wbsname": "Design Report",
      "hrsworked": "02:30",
      "dateworked": "12-02-2022",
      "status": "Rejected"
    },
    {
      "tsid": 174,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 22,
      "wbsname": "Design Report",
      "hrsworked": "02:30",
      "dateworked": "13-02-2022",
      "status": "Rejected"
    },
    {
      "tsid": 175,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 22,
      "wbsname": "Design Report",
      "hrsworked": "04:00",
      "dateworked": "11-02-2022",
      "status": "Submitted"
    },
    {
      "tsid": 176,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 23,
      "wbsname": "Plot charts",
      "hrsworked": "03:00",
      "dateworked": "11-02-2022",
      "status": "Submitted"
    },
    {
      "tsid": 177,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 23,
      "wbsname": "Plot charts",
      "hrsworked": "04:00",
      "dateworked": "10-02-2022",
      "status": "Submitted"
    },
    {
      "tsid": 178,
      "projectid": 2,
      "projectname": "P2P",
      "wbsid": 22,
      "wbsname": "Design Report",
      "hrsworked": "02:45",
      "dateworked": "02-02-2022",
      "status": "Submitted"
    },
    {
      "tsid": 179,
      "projectid": 3,
      "projectname": "Bizprout",
      "wbsid": 26,
      "wbsname": "Payroll",
      "hrsworked": "04:15",
      "dateworked": "16-02-2022",
      "status": "Rejected"
    },
    {
      "tsid": 180,
      "projectid": 3,
      "projectname": "Bizprout",
      "wbsid": 26,
      "wbsname": "Payroll",
      "hrsworked": "04:00",
      "dateworked": "2022-03-04T12:40:50.831Z",
      "status": "Rejected"
    },
    {
      "tsid": 181,
      "projectid": 3,
      "projectname": "Bizprout",
      "wbsid": 25,
      "wbsname": "Accounts",
      "hrsworked": "03:00",
      "dateworked": "2022-03-04T12:40:50.831Z",
      "status": "Rejected"
    },
    {
      "tsid": 182,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "04:45",
      "dateworked": "16-03-2022",
      "status": "Submitted"
    },
    {
      "tsid": 183,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "03:00",
      "dateworked": "16-03-2022",
      "status": "Submitted"
    },
    {
      "tsid": 184,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 6,
      "wbsname": "Job Work",
      "hrsworked": "02:45",
      "dateworked": "16-03-2022",
      "status": "Submitted"
    },
    {
      "tsid": 185,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 13,
      "wbsname": "Fixed Asset Module",
      "hrsworked": "04:00",
      "dateworked": "16-03-2022",
      "status": "Submitted"
    },
    {
      "tsid": 190,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 10,
      "wbsname": "MIS Reports",
      "hrsworked": "03:45",
      "dateworked": "09-03-2022",
      "status": "Approved"
    },
    {
      "tsid": 191,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 13,
      "wbsname": "Fixed Asset Module",
      "hrsworked": "04:00",
      "dateworked": "09-03-2022",
      "status": "Approved"
    },
    {
      "tsid": 192,
      "projectid": 3,
      "projectname": "Bizprout",
      "wbsid": 25,
      "wbsname": "Accounts",
      "hrsworked": "03:45",
      "dateworked": "16-03-2022",
      "status": "Submitted"
    },
    {
      "tsid": 193,
      "projectid": 3,
      "projectname": "Bizprout",
      "wbsid": 26,
      "wbsname": "Payroll",
      "hrsworked": "04:15",
      "dateworked": "16-03-2022",
      "status": "Submitted"
    },
    {
      "tsid": 194,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "04:30",
      "dateworked": "25-03-2022",
      "status": "Approved"
    },
    {
      "tsid": 195,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "04:30",
      "dateworked": "25-03-2022",
      "status": "Approved"
    },
    {
      "tsid": 196,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "03:15",
      "dateworked": "25-03-2022",
      "status": "Approved"
    },
    {
      "tsid": 197,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 4,
      "wbsname": "Stores",
      "hrsworked": "04:00",
      "dateworked": "25-03-2022",
      "status": "Approved"
    },
    {
      "tsid": 198,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 1,
      "wbsname": "API",
      "hrsworked": "01:30",
      "dateworked": "28-03-2022",
      "status": "Approved"
    },
    {
      "tsid": 199,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 2,
      "wbsname": "Engineering",
      "hrsworked": "02:15",
      "dateworked": "28-03-2022",
      "status": "Approved"
    },
    {
      "tsid": 200,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 3,
      "wbsname": "Production Planning & Procurement",
      "hrsworked": "02:00",
      "dateworked": "28-03-2022",
      "status": "Approved"
    },
    {
      "tsid": 201,
      "projectid": 1,
      "projectname": "Nanopix Tally API",
      "wbsid": 4,
      "wbsname": "Stores",
      "hrsworked": "02:00",
      "dateworked": "28-03-2022",
      "status": "Approved"
    }
  ]

  return (
    <main className="">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wr  ap justify-between items-center px-8 py-[18px]">
            <a href="" class="flex items-center">
                {mode === 'light' && <img src='https://i.imgur.com/1DKWGzB.png' class="h-8 mr-3" alt="Logo" />}
                {mode === 'dark' &&  <img src='https://i.imgur.com/3HsPeu2.png' class="h-8 mr-3" alt="Logo" />}
            </a>
            <div class="flex items-center">
                <a href="#" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">About</a>
                <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
            </div>
        </div>
    </nav>

      <LoggedHours projectData={projectData} />
    </main>
  );
}

export default App;

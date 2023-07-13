import React, { useState, useEffect } from "react";

function LoggedHours(projectData) {
  const [openStatus, setOpenStatus] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [statusFilter, setStatusFilter] = useState([]);
  const [projectFilter, setProjectFilter] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredRows = projectData.projectData.filter(
      (row) =>
        (statusFilter.length === 0 || statusFilter.includes(row.status)) &&
        (projectFilter.length === 0 || projectFilter.includes(row.projectname))
    );
    setFilteredData(filteredRows);
  }, [statusFilter, projectFilter, projectData]);

  const handleSubmittedClick = () => {
    if (statusFilter.includes("Submitted")) {
      setStatusFilter(statusFilter.filter((status) => status !== "Submitted"));
    } else {
      setStatusFilter([...statusFilter, "Submitted"]);
    }
  };

  const handleApprovedClick = () => {
    if (statusFilter.includes("Approved")) {
      setStatusFilter(statusFilter.filter((status) => status !== "Approved"));
    } else {
      setStatusFilter([...statusFilter, "Approved"]);
    }
  };

  const handleRejectedClick = () => {
    if (statusFilter.includes("Rejected")) {
      setStatusFilter(statusFilter.filter((status) => status !== "Rejected"));
    } else {
      setStatusFilter([...statusFilter, "Rejected"]);
    }
  };

  const handleProjectClick = (project) => {
    if (projectFilter.includes(project)) {
      setProjectFilter(projectFilter.filter((proj) => proj !== project));
    } else {
      setProjectFilter([...projectFilter, project]);
    }
  };

  const handleEditClick = (index) => {
    const editedData = [...filteredData];
    editedData[index].isEditing = true;
    setFilteredData(editedData);
  };

  const handleHourChange = (event, index) => {
    const editedData = [...filteredData];
    editedData[index].hrsworked = event.target.value;
    setFilteredData(editedData);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      handleSaveClick(index);
    }
  };

  const handleSaveClick = (index) => {
    const editedData = [...filteredData];
    editedData[index].isEditing = false;
    setFilteredData(editedData);

    console.log("Edited Hour:", editedData[index].hrsworked);
  };

  return (
    <section className="p-8 dark:bg-black h-full w-screen">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
          Logged Hours
        </span>
      </h1>
      <div className="flex gap-6">
        <div className="relative pb-6">
          <button
            id="dropdownCheckboxButton"
            data-dropdown-toggle="dropdownDefaultCheckbox"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenStatus(!openStatus);
              setOpenProject(false);
            }}
          >
            Filter by Status
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownDefaultCheckbox"
            className={` ${
              openStatus ? "" : "hidden"
            } z-10 top-14 absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ul
              className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    value=""
                    onClick={handleSubmittedClick}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Submitted
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-2"
                    type="checkbox"
                    value=""
                    onClick={handleRejectedClick}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Rejected
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value=""
                    onClick={handleApprovedClick}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-3"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Approved
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pb-6">
          <button
            id="dropdownCheckboxButton"
            data-dropdown-toggle="dropdownDefaultCheckbox"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenProject(!openProject);
              setOpenStatus(false);
            }}
          >
            Filter by Projects
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownDefaultCheckbox"
            className={` ${
              openProject ? "" : "hidden"
            } z-10 top-14 absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul
              className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    value=""
                    onClick={() => handleProjectClick("Nanopix Tally API")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Nanopix Tally API
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-2"
                    type="checkbox"
                    value=""
                    onClick={() => handleProjectClick("P2P")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    P2P
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value=""
                    onClick={() => handleProjectClick("Bizprout")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-3"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Bizprout
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-full no-scrollbar">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-2">
                Project name
              </th>
              <th scope="col" className="px-6 py-2">
                WBS name
              </th>
              <th scope="col" className="px-6 py-2">
                Hours worked
              </th>
              <th scope="col" className="px-6 py-2">
                Date
              </th>
              <th scope="col" className="px-6 py-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={index}
                className="bg-white transition-colors dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.projectname}
                </th>
                <td className="px-6 py-3">{row.wbsname}</td>
                <td className="px-6 py-3 flex">
                  {row.isEditing ? (
                    <input
                      type="time"
                      value={row.hrsworked}
                      onChange={(event) => handleHourChange(event, index)}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                      className="border rounded px-2 py-1 focus:outline-none bg-gray-100 dark:bg-gray-800"
                    />
                  ) : (
                    <>
                      {row.hrsworked}

                      {row.status !== "Approved" && (
                        <button
                          className="ml-2 flex flex-row justify-center items-center gap-1 text-blue-600 hover:underline focus:outline-none"
                          onClick={() => handleEditClick(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-3 h-3"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                          <span className="text-xs">Edit</span>
                        </button>
                      )}
                    </>
                  )}
                </td>
                <td className="px-6 py-3">{row.dateworked}</td>
                <td className="px-6 py-3">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default LoggedHours;

import React from "react";

const EmployeesCard = (props) => {
  const { id, name, email,number, address, salary } = props.person;
  return (
    <>
      <div
        key={id}
        className="flex justify-between p-5 border-solid border-2 rounded-ld"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2>{id}</h2>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{number}</h1>
        <h1>{address}</h1>
        <h2>{salary}</h2>
        <div className="flex m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2 cursor-pointer"
            onClick={() => {
                props.clickHandler(id);
              }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2 cursor-pointer"
            onClick={() => {
              props.clickHandler(id);
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default EmployeesCard;

import React from "react";
import EmployeesCard from "./EmployeesCard";


const EmployeeList = (props) => {
 const deleteContactHandler = (id)=>{
     props.getEmployeeId(id);
 }
  const renderEmployeeList = props.employee.map((person,id) => {
    return (

        <EmployeesCard person={person} key={id} clickHandler={deleteContactHandler}/>
       
    
    );
  });
  return (
  <>
  <div className="text-center m-5">
      {renderEmployeeList}
      </div>
  </>
  );
};

export default EmployeeList;


// <div key={id} className="flex justify-around p-5 border-solid border-2 rounded-ld">
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="2"
//     d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//   />
// </svg>
// <h2>{person.id}</h2>
// <h1>{person.name}</h1>
// <h1>{person.email}</h1>
// <div>
//   {" "}
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-6 w-6"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//     />
//   </svg>
// </div>
// </div>
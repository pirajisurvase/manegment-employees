import React,{useState, useEffect} from "react"
import './App.css';
import AddEmployee from './cmp/AddEmployee';
import EmployeeList from './cmp/EmployeeList';
import Header from './cmp/Header';

function App() {
  const LOCAL_STORAGE_KEY = "persons";
  const [persons, setPersons] = useState([]);
 
  const addEmployeeHandler = (person)=>{
   
    setPersons([...persons, person]);
  }

  const removeEmployeeHandler = (id)=>{
    const newEmployeeList = persons.filter((person)=>{
      return person.id !==id;
    })
    setPersons(newEmployeeList);
  }
  useEffect(()=>{
    const retrivePersons = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(persons)));
    setPersons(retrivePersons);
  },[ ])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(persons));
  },[persons])


  return (
    <div className="App">
    <Header/>
    <AddEmployee addEmployeeHandler={addEmployeeHandler}/>
    <EmployeeList employee={persons} getEmployeeId={removeEmployeeHandler} />
    
    </div>
  );
}

export default App;

import React from "react";
import {useState} from "react";
import '../pages.css';
import axios from 'axios'

const Find_Student = () => {

    const [firstName, set_f_Name] = useState("");
    const [lastName, set_l_Name] = useState("");
    const [Sport, setSport] = useState("");
    const [ID, setID] = useState("");
    const [credit_amount, setCredit] = useState("");
  
  
    const [student_list, setStudentList] = useState([]);
    
    // const add_student = () => {
    //   console.log(firstName);
    //   axios.get('http://localhost:3001/students', 
    //     {
    //       firstName: firstName, 
    //       lastName: lastName, 
    //       sport: Sport, 
    //       id: ID, 
    //       postion: Position
    //     }).then(() => {console.log("success")});
    // }
  
    const display_student = () => {
      axios.post('http://localhost:3001/students', {
              firstName: firstName, 
              lastName: lastName, 
              sport: Sport, 
              id: ID, 
              credits: credit_amount
            })
      .then((response) => {
        console.log(response);
        setStudentList(response.data);
      });
    }
  return (
    <div>
      <label>First Name:</label>
      <input type = "text" onChange ={(event) => {
        set_f_Name(event.target.value)}} 
        />
      <label>Last Name:</label>
      <input type = "text" onChange ={(event) => {
        set_l_Name(event.target.value)}}
        />
      <label>Sport:</label>
      <input type = "text" onChange ={(event) => {
        setSport(event.target.value)}} 
        />
      <label>ID:</label>
      <input type = "text" onChange ={(event) => {
        setID(event.target.value)}}
        />
      <label>Current Credits:</label>
      <input type = "text" onChange ={(event) => {
        setCredit(event.target.value)}}
        />
      <button onClick = {display_student}>display information</button>
      <div>
      {student_list.map((val, key) => {
        return <div className = "list_people">
          <h3> First Name: {val.First_Name}</h3>
          <h3> Last Name:{val.Last_Name}</h3>
          <h3> ID: {val.ID}</h3>
          <h3> Sport: {val.SportName}</h3>
          <h3> Current Credits:{val.Current_credits}</h3>
          </div>
      })}
      </div>
    </div>
  );
};
  
export default Find_Student;
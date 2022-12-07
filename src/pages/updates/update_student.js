import React from "react";
import {useState} from "react";
import '../pages.css';
import axios from 'axios'

const Update_Student = () => {

    const [firstName, set_f_Name] = useState("");
    const [lastName, set_l_Name] = useState("");
    const [Current_credits, setCurrentCredits] = useState("");
    const [ID, setID] = useState("");
    const [Sport, setSport] = useState("");
    const [student_list, setStudentList] = useState([]);
    
  
    const display_student = () => {
      axios.post('http://localhost:3001/update_student', {
              firstName: firstName, 
              lastName: lastName, 
              sport: Sport, 
              id: ID,
              current_credits: Current_credits
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
        set_f_Name(event.target.value)}} required/>
      <label>Last Name:</label>
      <input type = "text" onChange ={(event) => {
        set_l_Name(event.target.value)}} required/>
      <label>Sport:</label>
      <input type = "text" onChange ={(event) => {
        setSport(event.target.value)}} required />
      <label>ID:</label>
      <input type = "text" onChange ={(event) => {
        setID(event.target.value)}} required/>
      <label>Current Credits:</label>
      <input type = "text" onChange ={(event) => {
        setCurrentCredits(event.target.value)}} required/>
      <button onClick = {display_student}>update information</button>
      <div>
      {student_list.map((val, key) => {
        return <div className = "list_people">
          <h3> First Name: {val.First_Name}</h3>
          <h3> Last Name:{val.Last_Name}</h3>
          <h3> ID: {val.ID}</h3>
          <h3> Sport: {val.SportName}</h3>
          <h3> Credits: {val.Current_credits}</h3>
          </div>
      })}
      </div>
    </div>
  );
};
  
export default Update_Student 
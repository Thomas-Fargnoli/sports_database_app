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
    <div className="get_information">
      <table>
        <thead>
          <tr>
            <th><label>First Name:</label></th>
            <th><label>Last Name:</label></th>
            <th><label>Sport:</label></th>
            <th><label>ID:</label></th>
            <th><label>Current Credits:</label></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type = "text" onChange ={(event) => {
        set_f_Name(event.target.value)}} required
        /></td>
            <td><input type = "text" onChange ={(event) => {
        set_l_Name(event.target.value)}} required
        /></td>
            <td><input type = "text" onChange ={(event) => {
        setSport(event.target.value)}} required
        /></td>
            <td><input type = "text" onChange ={(event) => {
        setID(event.target.value)}} required
        /></td>
            <td><input type = "text" onChange ={(event) => {
        setCurrentCredits(event.target.value)}} required
        /></td>
          </tr>
        </tbody>
      </table>
      <button onClick = {display_student}>update information</button>
      <div>
      {student_list.map((val, key) => {
        return <div className = "list_people">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th>Sport</th>
                <th>Current Credits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{val.First_Name}</td>
                <td>{val.Last_Name}</td>
                <td>{val.ID}</td>
                <td>{val.SportName}</td>
                <td>{val.Current_credits}</td>
              </tr>
            </tbody>
          </table>
          </div>
      })}
      </div>
    </div>
  );
};
  
export default Update_Student 
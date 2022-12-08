import React from "react";
import {useState} from "react";
import '../pages.css';
import axios from 'axios'

const Insert_Coach = () => {

    const [firstName, set_f_Name] = useState("");
    const [lastName, set_l_Name] = useState("");
    const [Sport, setSport] = useState("");
    const [ID, setID] = useState("");
    const [payrate, setPayrate] = useState("");
    const [coach_list, setCoachList] = useState([]);
    
  
    const display_coach = () => {
      axios.post('http://localhost:3001/insert_coach', {
              firstName: firstName, 
              lastName: lastName, 
              sport: Sport, 
              id: ID,
              payrate: payrate
            })
      .then((response) => {
        console.log(response);
        setCoachList(response.data);
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
            <th><label>Payrate:</label></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type = "text" onChange ={(event) => {
        set_f_Name(event.target.value)}} 
        /></td>
            <td><input type = "text" onChange ={(event) => {
        set_l_Name(event.target.value)}}
        /></td>
            <td><input type = "text" onChange ={(event) => {
        setSport(event.target.value)}} 
        /></td>
            <td><input type = "text" onChange ={(event) => {
        setID(event.target.value)}}
        /></td>
            <td><input type = "text" onChange ={(event) => {
        setPayrate(event.target.value)}}
        /></td>
          </tr>
        </tbody>
      </table>
      <button onClick = {display_coach}>insert information</button>
      <div>
      {coach_list.map((val, key) => {
        return <div className = "list_people">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th>Sport</th>
                <th>Payrate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{val.First_Name}</td>
                <td>{val.Last_Name}</td>
                <td>{val.ID}</td>
                <td>{val.SportName}</td>
                <td>${val.Payrate}/hr</td>
              </tr>
            </tbody>
          </table>
          </div>
      })}
      </div>
    </div>
  );
};
  
export default Insert_Coach;
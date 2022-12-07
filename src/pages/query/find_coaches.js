import React from "react";
import {useState} from "react";
import '../pages.css';
import axios from 'axios'

const Find_Coach = () => {

    const [firstName, set_f_Name] = useState("");
    const [lastName, set_l_Name] = useState("");
    const [Sport, setSport] = useState("");
    const [ID, setID] = useState("");
  
  
    const [coach_list, setCoachList] = useState([]);
    
  
    const display_coach = () => {
      axios.post('http://localhost:3001/coaches', {
              firstName: firstName, 
              lastName: lastName, 
              sport: Sport, 
              id: ID
            })
      .then((response) => {
        console.log(response);
        setCoachList(response.data);
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
      <button onClick = {display_coach}>display information</button>
      <div>
      {coach_list.map((val, key) => {
        return <div className = "list_people">
          <h3> First Name: {val.First_Name}</h3>
          <h3> Last Name:{val.Last_Name}</h3>
          <h3> ID: {val.ID}</h3>
          <h3> Sport: {val.SportName}</h3>
          <h3> Payrate: ${val.Payrate}/hr</h3>
          </div>
      })}
      </div>
    </div>
  );
};
  
export default Find_Coach;
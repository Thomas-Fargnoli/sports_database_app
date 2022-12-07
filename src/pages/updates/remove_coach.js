import React from "react";
import {useState} from "react";
import '../pages.css';
import axios from 'axios'

const Remove_Coach = () => {

  const [firstName, set_f_Name] = useState("");
  const [lastName, set_l_Name] = useState("");
  const [Sport, setSport] = useState("");
  const [ID, setID] = useState("");
  const [payrate, setPayrate] = useState("");
  const [coach_list, setCoachList] = useState([]);
  

  const display_coach = () => {
    axios.post('http://localhost:3001/remove_coach', {
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
    <label>Payrate:</label>
    <input type = "text" onChange ={(event) => {
      setPayrate(event.target.value)}} required/>
    <button onClick = {display_coach}>insert information</button>
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
  
export default Remove_Coach;
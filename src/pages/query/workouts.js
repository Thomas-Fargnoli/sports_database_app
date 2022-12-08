import React from "react";
import {useState} from "react";
import '../pages.css';
import axios from 'axios'

const Find_Workout = () => {

    const [workout, Set_Workout_Name] = useState("");
    const [Sport, setSport] = useState("");
    const [location, setLocation] = useState("");
  
  
    const [workout_list, setWorkoutList] = useState([]);
    
  
    const display_workouts = () => {
      axios.post('http://localhost:3001/workouts', {
              workout: workout, 
              sport: Sport, 
              location: location
            })
      .then((response) => {
        console.log(response);
        setWorkoutList(response.data);
      });
    }

  return (
    <div className="get_information">
      <table>
        <thead>
          <tr>
            <th><label>Workout:</label></th>
            <th><label>Sport:</label></th>
            <th><label>Location:</label></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type = "text" onChange ={(event) => {
        Set_Workout_Name(event.target.value)}} 
        /></td>
            <td><input type = "text" onChange ={(event) => {
        setSport(event.target.value)}} 
        /></td>
            <td><input type = "text" onChange ={(event) => {
        setLocation(event.target.value)}}
        /></td>
          </tr>
        </tbody>
      </table>
      <button onClick = {display_workouts}>display information</button>
      <div>
      {workout_list.map((val, key) => {
        return <div className = "list_people">
          <table>
            <thead>
              <tr>
                <th>Sport</th>
                <th>Workout</th>
                <th>Reservation Length</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{val.SportName}</td>
                <td>{val.Workout_Name}</td>
                <td>{val.Minutes_Reserved} minutes</td>
                <td>{val.Location_Name}</td>
              </tr>
            </tbody>
          </table>
          </div>
      })}
      </div>
    </div>
  );
};
  
export default Find_Workout;
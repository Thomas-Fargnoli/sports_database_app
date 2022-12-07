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
    <div>
      <label>Workout:</label>
      <input type = "text" onChange ={(event) => {
        Set_Workout_Name(event.target.value)}} 
        />
      <label>Sport:</label>
      <input type = "text" onChange ={(event) => {
        setSport(event.target.value)}} 
        />
      <label>Location:</label>
      <input type = "text" onChange ={(event) => {
        setLocation(event.target.value)}}
        />
      <button onClick = {display_workouts}>display information</button>
      <div>
      {workout_list.map((val, key) => {
        return <div className = "list_people">
          <h3> Sport:{val.SportName}</h3>
          <h3> Workout: {val.Workout_Name}</h3>
          <h3> Reservation Length: {val.Minutes_Reserved} minutes</h3>
          <h3> Location: {val.Location_Name}</h3>
          </div>
      })}
      </div>
    </div>
  );
};
  
export default Find_Workout;
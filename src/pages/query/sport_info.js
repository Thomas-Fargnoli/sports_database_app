import React from "react";
import {useState} from "react";
import '../pages.css';
import axios from 'axios'

const Sport_Info = () => {
    const [Sport, setSport] = useState("");
    const [sport_info_list, setSportInfoList] = useState([]);
    
  
    const display_sport_info = () => {
      axios.post('http://localhost:3001/sport_info', {
              sport: Sport, 
            })
      .then((response) => {
        console.log(response);
        setSportInfoList(response.data);
      });
    }

  return (
    <div>
      <label>Sport:</label>
      <input type = "text" onChange ={(event) => {
        setSport(event.target.value)}} 
        />
      <button onClick = {display_sport_info}>display information</button>
      <div>
      {sport_info_list.map((val, key) => {
        return <div className = "list_people">
          <h3> Sport:{val.SportName}</h3>
          <h3> Member Amount: {val.members_amount}</h3>
          <h3> Practice Location: {val.Location_Name}</h3>
          <h3> Coach: {val.First_Name} {val.Last_Name}</h3>
          </div>
      })}
      </div>
    </div>
  );
};
  
export default Sport_Info;
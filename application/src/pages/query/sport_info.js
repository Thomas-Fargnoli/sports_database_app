import React from "react";
import {useState} from "react";
import '../pages.css';
import axios from 'axios'

const Sport_Info = () => {
    const [Sport, setSport] = useState("");
    const [sport_info_list, setSportInfoList] = useState([]);
    
  
    const display_sport_info = () => {
      axios.post('https://sports-database-436.herokuapp.com/sport_info', {
              sport: Sport, 
            })
      .then((response) => {
        console.log(response);
        setSportInfoList(response.data);
      });
    }

  return (
    <div className="get_information">
      <table>
        <thead>
          <tr>
            <th><label>Sport:</label></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type = "text" onChange ={(event) => {
        setSport(event.target.value)}} 
        /></td>
          </tr>
        </tbody>
      </table>
      <button onClick = {display_sport_info}>display information</button>
      <div>
      {sport_info_list.map((val, key) => {
        return <div className = "list_people">
          <table>
            <thead>
              <tr>
                <th>Sport</th>
                <th>Member Amount</th>
                <th>Practice Location</th>
                <th>Coach</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{val.SportName}</td>
                <td>{val.members_amount}</td>
                <td>{val.Location_Name}</td>
                <td>{val.First_Name} {val.Last_Name}</td>
              </tr>
            </tbody>
          </table>
          </div>
      })}
      </div>
    </div>
  );
};
  
export default Sport_Info;
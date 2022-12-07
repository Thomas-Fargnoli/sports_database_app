import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/find_students" activeStyle>
            Find Students
          </NavLink>
          <NavLink to="/find_coaches" activeStyle>
            Find Coaches
          </NavLink>
          <NavLink to="/sport_workout" activeStyle>
            Sport's Workouts
          </NavLink>
          <NavLink to="/sport_info" activeStyle>
            Sport information
          </NavLink>
          <NavLink to="/insert_coach" activeStyle>
            Insert Coach
          </NavLink>
          <NavLink to="/remove_coach" activeStyle>
            Remove Coach
          </NavLink>
          <NavLink to="/update_coach" activeStyle>
            Update Coach
          </NavLink>
          <NavLink to="/insert_student" activeStyle>
            Insert Student
          </NavLink>
          <NavLink to="/remove_student" activeStyle>
            Remove Student
          </NavLink>
          <NavLink to="/update_student" activeStyle>
            Update Student
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
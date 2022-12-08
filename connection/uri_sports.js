var mysql = require('mysql2');
var express = require('express');
var app = express();
var connection = require('./connection')
var cors = require("cors");

app.use(cors());
app.use(express.json());

// TO DO: Write post for all the update, remove, and insert statements
// TO DO: Improve the CSS of web app to look at least a little pretty for the presentation


app.post('/students', function(req,res){
  let first_name = req.body.firstName;
  let last_name = req.body.lastName;
  let sport_name = req.body.sport;
  
  let ID = req.body.id;
  let credits = req.body.credits;
  let sql = "SELECT * FROM Person NATURAL JOIN Student NATURAL JOIN Enrollment"
  if (first_name != '' || last_name != '' || sport_name != '' || ID != '' || credits != ''){
    let instruction = " WHERE"
    let instruction_num = 0
    if (first_name != '') {
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sql += instruction + " First_Name = '" + first_name + "'"
      instruction_num += 1
    }
    if (last_name != '') {
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sql += instruction + " Last_Name = '" + last_name + "'" ;
      instruction_num += 1
    } 
    if (ID != ''){
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sql += instruction + " ID = '" + ID + "'" ;
      instruction_num += 1
    }
    if (sport_name != ''){
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sport_name = sport_name.replace(/'/g, "\\'")
      console.log(sport_name)
      sql += instruction + " SportName = '" + sport_name + "'" ;
      instruction_num += 1
    }
    if ( credits != ''){
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sql += instruction + " Current_credits = '" + credits + "'" ;
      instruction_num += 1
    }
  }
  console.log(sql)
  
  connection.query(sql, function(err,result){
    if (err) throw err;
    res.send(result);
  })
});

app.post('/coaches', function(req,res){
  let first_name = req.body.firstName;
  let last_name = req.body.lastName;
  let sport_name = req.body.sport;
  let ID = req.body.id;
  let sql = "SELECT * FROM Person NATURAL JOIN coach"
  if (first_name != '' || last_name != '' || sport_name != '' || ID != '' ){
    let instruction = " WHERE"
    let instruction_num = 0
    if (first_name != '') {
      if (instruction_num > 0) {
        instruction = " and"
      }
      sql += instruction + " First_Name = '" + first_name + "'"
      instruction_num += 1
    }
    if (last_name != '') {
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sql += instruction + " Last_Name = '" + last_name + "'" ;
      instruction_num += 1
    } 
    if (ID != ''){
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sql += instruction + " ID = '" + ID + "'" ;
      instruction_num += 1
    }
    if (sport_name != ''){
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sport_name = sport_name.replace(/'/g, "\\'")
      console.log(sport_name)
      sql += instruction + " SportName = '" + sport_name + "'" ;
      instruction_num += 1
    }
  }
  console.log(sql)
  connection.query(sql, function(err,result){
    if (err) throw err;
    res.send(result);
  })
});

app.post('/workouts', function(req,res){
  let workout = req.body.workout;
  let sport_name = req.body.sport;
  let location = req.body.location;
  let sql = "SELECT * FROM Training NATURAL JOIN Workout"
  if (workout != '' || location != '' || sport_name != '' ){
    let instruction = " WHERE"
    let instruction_num = 0
    if (workout != '') {
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sql += instruction + " Workout_Name = '" + workout + "'"
      instruction_num += 1
    }
    if (location != '') {
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sql += instruction + " Location_Name = '" + location + "'" ;
      instruction_num += 1
    } 
    if (sport_name != ''){
      if (instruction_num > 0) {
        instruction = " AND"
      }
      sport_name = sport_name.replace(/'/g, "\\'")
      sql += instruction + " SportName = '" + sport_name + "'" ;
      instruction_num += 1
    }
  }
  
  console.log(sql)
  connection.query(sql, function(err,result){
    if (err) throw err;
    res.send(result);
  })
});

app.post('/sport_info', function(req,res){
  let sport_name = req.body.sport;
  let sql = "SELECT * FROM sport NATURAL JOIN (coach NATURAL JOIN Person)";
  console.log(sport_name);
  if (sport_name != ''){
    sql += " WHERE SportName = '" + sport_name + "'";
  }
  
  console.log(sql)
  connection.query(sql, function(err,result){
    if (err) throw err;
    res.send(result);
  })
});

app.post('/insert_coach', function(req,res){
  console.log(req.body);
  let first_name = req.body.firstName;
  let last_name = req.body.lastName;
  let sport_name = req.body.sport;
  sport_name = sport_name.replace(/'/g, "\\'")
  let id = req.body.id;
  let payrate = req.body.payrate;

  connection.query("INSERT INTO Person VALUES ('" +id+"', '"+first_name+"', '"+last_name+"'); ", function(err,result){
    if (err) throw err;
  })
  connection.query("INSERT INTO coach VALUES (" +payrate+", '"+id+"', '"+sport_name+"'); ", function(err,result){
    if (err) throw err;
  })
  connection.query("SELECT * FROM sport NATURAL JOIN (coach NATURAL JOIN Person) WHERE First_Name = '" + first_name + "' AND Last_Name = '" + last_name+"'", function(err,result){
    if (err) throw err;
    res.send(result);
  })
});

app.post('/update_coach', function(req,res){
  let first_name = req.body.firstName;
  let last_name = req.body.lastName;
  let sport_name = req.body.sport;
  sport_name = sport_name.replace(/'/g, "\\'")
  let id = req.body.id;
  let payrate = req.body.payrate;
  
  connection.query("UPDATE coach SET Payrate = " + payrate + ",SportName = '" + sport_name +"' WHERE id = '"+id+"';" , function(err,result){
    if (err) throw err;
  })
  connection.query("UPDATE Person SET First_Name = '" + first_name + "', Last_Name = '" + last_name +"' WHERE ID = '"+id+"';", function(err,result){
    if (err) throw err;
  })
  connection.query("SELECT * FROM sport NATURAL JOIN (coach NATURAL JOIN Person) WHERE ID = '"+id+"'", function(err,result){
    if (err) throw err;
    res.send(result);
  })
});

app.post('/remove_coach', function(req,res){
  let sport_name = req.body.sport;
  sport_name = sport_name.replace(/'/g, "\\'")
  let id = req.body.id;
  
  connection.query("SELECT * FROM sport NATURAL JOIN (coach NATURAL JOIN Person) WHERE ID = '"+id+"'", function(err,result){
    if (err) throw err;
    res.send(result);
  })

  connection.query("DELETE FROM coach WHERE id = '"+id+"';" , function(err,result){
    if (err) throw err;
  })

  connection.query("DELETE FROM Person WHERE id = '"+id+"';" , function(err,result){
    if (err) throw err;
  })

});

app.post('/insert_student', function(req,res){
  let first_name = req.body.firstName;
  let last_name = req.body.lastName;
  let sport_name = req.body.sport;
  sport_name = sport_name.replace(/'/g, "\\'")
  let id = req.body.id;
  let current_credits = req.body.current_credits;
  


  connection.query("INSERT INTO Person VALUES ('" +id+"', '"+first_name+"', " +"'"+last_name+"');", function(err,result){
    if (err) throw err;
  })

  connection.query("INSERT INTO Student VALUES ( '"+id+"', " +"'"+current_credits+"');", function(err,result){
    if (err) throw err;
  })

  connection.query("INSERT INTO Rnrollment VALUES ( '"+id+"', " +"'"+sport_name+"');", function(err,result){
    if (err) throw err;
  })

  connection.query("SELECT * FROM Person NATURAL JOIN Student NATURAL JOIN Rnrollment WHERE First_Name = '" + first_name + "' AND Last_Name = '" + last_name+"'", function(err,result){
    if (err) throw err;
    res.send(result);
  })
});

app.post('/update_student', function(req,res){
  let first_name = req.body.firstName;
  let last_name = req.body.lastName;
  let sport_name = req.body.sport;
  sport_name = sport_name.replace(/'/g, "\\'")
  let id = req.body.id;
  let current_credits = req.body.current_credits;
  
  connection.query("UPDATE Student SET Current_credits = '" + current_credits + "' WHERE id = '"+id+"';", function(err,result){
    if (err) throw err;
  })

  connection.query("UPDATE Person SET First_Name = '" + first_name + "', Last_Name = '" + last_name +"' WHERE ID = '"+id+"';", function(err,result){
    if (err) throw err;
  })

  connection.query("UPDATE Enrollment SET SportName = '"+ sport_name+"' WHERE ID = '" + id +"';", function(err,result){
    if (err) throw err;
  })
  
  connection.query("SELECT * FROM Person NATURAL JOIN Student NATURAL JOIN Enrollment WHERE First_Name = '" + first_name + "' AND Last_Name = '" + last_name+"'", function(err,result){
    if (err) throw err;
    res.send(result);
  })
});

app.post('/remove_student', function(req,res){
  let sport_name = req.body.sport;
  sport_name = sport_name.replace(/'/g, "\\'")
  let id = req.body.id;
  
  connection.query("SELECT * FROM Person NATURAL JOIN Student NATURAL JOIN Enrollment WHERE ID = '" + id +"'", function(err,result){
    if (err) throw err;
    res.send(result);
  })

  connection.query("DELETE FROM Student WHERE ID = '"+id+"';", function(err,result){
    if (err) throw err;
  })

  connection.query("DELETE FROM Enrollment WHERE ID = '"+id+"';", function(err,result){
    if (err) throw err;
  })
  
  connection.query("DELETE FROM Person WHERE ID = '"+id+"';", function(err,result){
    if (err) throw err;
  })
});

app.listen(3001, function(){
  console.log('App Listening on port 3000');
  connection.connect(function(err){
    if(err) throw err;
    console.log('Database connected!');
  });
})

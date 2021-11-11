import './App.css';
import Header from './header/header';
import Footer from './footer';
import ActivityList from './activity-list';
import ActivitySelector from './activity-selector';
import { useState } from "react";

function App() {
  const activities = [{
    "name":"Running",
    "duration":"45 mins",
    "time":"Monday 7pm"
   },
   {
       "name":"Cycling",
       "duration":"1 hr",
       "time":"Tuesday 2pm"
      },
      {
       "name":"Yoga",
       "duration":"45 mins",
       "time":"Monday 9am"
      },
      {
        "name":"Meditation",
        "duration":"45 mins",
        "time":"Friday 7pm"
       }]
       const [name, setName] =useState("");
  return (
    <div className="container">
        <Header subtitle="Workout for mind & boyy"></Header>
        <ActivitySelector setName={setName} ></ActivitySelector>
        <div className="row">
          <ActivityList activities={activities} selectedName={name}></ActivityList>
        </div>
        <Footer footerText="It is awesome app"></Footer>
    </div>
  );
}

export default App;

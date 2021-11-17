import './App.css';
import Header from './header/header';
import Footer from './footer';
import ActivityList from './activity-list';
import ActivitySelector from './activity-selector';
import { useState , useEffect} from "react";

function App() {
  const [activities, setActivities] =useState([]);
  const [availableActivities, setAvailableActivities] =useState([]);
  const [name, setName] =useState("");

  useEffect(() =>{
    async function fecthData(){
      const response = await (await fetch('/activities.json')).json();
      setActivities(response);
    }
   fecthData();
  },[])

  useEffect(() =>{
    async function fecthData(){
      const response = await (await fetch('/availableActivities.json')).json();
      setAvailableActivities(response);
    }
   fecthData();
  },[])

  return (
    <div className="container">
        <Header subtitle="Workout for mind & body"></Header>
        <ActivitySelector setName={setName} availableActivities={availableActivities}></ActivitySelector>
        <div className="row">
          <ActivityList activities={activities} selectedName={name}></ActivityList>
        </div>
        <Footer footerText="It is awesome app"></Footer>
    </div>
  );
}

export default App;

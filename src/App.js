import './App.css';
import Header from './header/header';
import Footer from './footer';
import ActivityList from './activity-list';
import ActivitySelector from './activity-selector';
import { useState , useEffect} from "react";

function App() {
  const [activities, setActivities] =useState([]);
  const [name, setName] =useState("");

  useEffect(() =>{
    async function fecthData(){
      const response = await (await fetch('/activities.json')).json();
      setActivities(response);
    }
   fecthData();
  },[])
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

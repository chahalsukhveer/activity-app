import './App.css';
import Header from './header/header';
import Footer from './footer';
import ActivityList from './activity-list';
import ActivitySelector from './activity-selector';
import { useState , useEffect} from "react";
import AddActivity from './add-activity';

function App() {
  const [activities, setActivities] =useState([]);
  const [availableActivities, setAvailableActivities] =useState([]);
  const [name, setName] =useState("");
  const [addActivity, setAddActivity] =useState(false);

  useEffect(() =>{
    async function fecthData(){
      const response = await (await fetch('/activities.json')).json();
      setActivities(response);
    }
   fecthData();
  },[]);

  useEffect(() =>{
    async function fecthData(){
      const response = await (await fetch('/availableActivities.json')).json();
      setAvailableActivities(response);
    }
   fecthData();
  },[])

const addActivityClick = () => {setAddActivity(!addActivity)};
const handleAddActivity = (activity) =>{activities.push(activity)}

  return (
    <div className="container">
        <Header subtitle="Workout for mind & body"></Header>
        <ActivitySelector setName={setName} availableActivities={availableActivities}></ActivitySelector>
        <div className="row">
        <div className="col-8">
          <ActivityList activities={activities} selectedName={name}></ActivityList>
          </div>
          <div className="col-4">
             <button id="addActivity" onClick={addActivityClick}>Add new activity</button>
             {addActivity ? <AddActivity handleAddActivity={handleAddActivity} setAddActivity={setAddActivity}></AddActivity> : ''}
          </div>
        </div>
        <Footer footerText="It is awesome app"></Footer>
    </div>
  );
}

export default App;

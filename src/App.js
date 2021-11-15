import './App.css';
import Header from './header/header';
import Footer from './footer';
import ActivityList from './activity-list';

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
  return (
    <div className="container">
        <Header subtitle="Workout for mind & boyy"></Header>
        {/**Add here activity selector component */}
        <div className="row">
        <ActivityList activities={activities}></ActivityList>
        </div>
        <Footer footerText="It is awesome app"></Footer>
    </div>
  );
}

export default App;

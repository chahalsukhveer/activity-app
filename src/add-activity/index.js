import { useState } from "react";
const AddActivity = ({setAddActivity,handleAddActivity }) => {
    console.log("Add activity");
    const [newActivity, setNewActivity] = useState({
        name:"",
        duration:"",
        time:""
    });

    const onChange = (e) => {
        setNewActivity({...newActivity,[e.target.id]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
         setAddActivity(false);
         handleAddActivity(newActivity);
    }
       
    return ( 
        
        <>
            <form className="mt-2">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={newActivity.name} placeholder="Name" id="name" onChange={onChange}></input>
                </div>  
                <div className="form-group">
                    <label htmlFor="duration">Duration</label>
                    <input type="text" className="form-control" value={newActivity.duration} placeholder="Duration" id="duration" onChange={onChange}></input>
                </div> 
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input type="text" className="form-control" value={newActivity.time} placeholder="Time" id="time" onChange={onChange}></input>
                </div>   
                <button
                    className="btn btn-primary mt-2"
                    disabled={!newActivity.name || !newActivity.duration || !newActivity.time}
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </form>
        </>
     );
}
 
export default AddActivity;
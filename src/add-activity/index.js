const AddActivity = () => {
    console.log("Add activity");
    /** Add here state props using useStateHook. 
     * Hint:  use Object e.g 
     * const [item, setItem] = useState({id:"", value:""})
     */
    return ( 
        <>
        <p>Uncomment form to start final exercise!!</p>
            {/* <form className="mt-2">
                <div className="form-group">
                    <label labelFor="name">Name</label>
                    <input type="text" className="form-control" value={name} placeholder="Name" id="name" onChange={onChange}></input>
                </div>  
                <div className="form-group">
                    <label labelFor="duration">Duration</label>
                    <input type="text" className="form-control" value={duration} placeholder="Duration" id="duration" onChange={onChange}></input>
                </div> 
                <div className="form-group">
                    <label labelFor="time">Time</label>
                    <input type="text" className="form-control" value={time} placeholder="Time" id="time" onChange={onChange}></input>
                </div>   
                <button
                    className="btn btn-primary mt-2"
                    disabled={!newActivitySession.name || !newActivitySession.duration || !newActivitySession.time}
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </form> */}
        </>
     );
}
 
export default AddActivity;
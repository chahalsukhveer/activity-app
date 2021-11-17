
const ActivitySelector = ({setName,availableActivities}) => {
    
    return ( 
        <>
         <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-2">
        <form>
            <label htmlFor="name">
                Search activity: 
                <select id="name" onChange={(e) => setName(e.target.value)}>
                    <option />
                    {availableActivities.map(activity => (
                        <option key={activity} value={activity}>{activity}</option>
                    ))}
                </select>
            </label>
        </form>
        </div>
    </div>
        </>
     );
}
 
export default ActivitySelector;
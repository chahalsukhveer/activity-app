
const ActivitySelector = ({setName}) => {
    const ACTIVITIES = ['Running','Cycling','Yoga','Meditation'];
    
    return ( 
        <>
         <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
        <form>
            <label htmlFor="name">
                Search activity: 
                <select id="name" onChange={(e) => setName(e.target.value)}>
                    <option />
                    {ACTIVITIES.map(activity => (
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
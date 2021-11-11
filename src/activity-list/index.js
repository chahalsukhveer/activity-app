const ActivityList = ({activities,selectedName}) => { 
    const selectedActivities = selectedName ? activities.filter((activity) => activity.name === selectedName) : activities;
    return (  
        <>
            <div className="col-8">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Activity</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Time</th>
                    </tr>
                    </thead>
                    <tbody>
                        {selectedActivities.map((activity, index) => (
                            <tr key={index}>
                                <td>{activity.name}</td>
                                <td>{activity.duration}</td>
                                <td>{activity.time}</td>
                            </tr> 
                        )
                               
                        )}
                    </tbody>
                </table>

            </div>
        </>
    );
}
 
export default ActivityList;
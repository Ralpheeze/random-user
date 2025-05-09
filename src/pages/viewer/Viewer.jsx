import React, { useState, useEffect } from 'react';
// import './Viewer.css';
import UserCard from '../../component/UserCard/UserCard';

const Viewer = () => {
  const [user, setUser] = useState(null); // State to store the fetched user data
  const [autoRefresh, setAutoRefresh] = useState(true); // State to control auto-refreshing of user data

 useEffect(() => {
   // Function to fetch user data from the API
   const fetchUser = async () => {
    try {
      const userAPI = await fetch('https://randomuser.me/api/'); //await helps to wait for the next line of code to finish before moving on.
      const userData = await userAPI.json(); // Parse the response as JSON
      console.log("User data fetched:", userData);
      setUser(userData); // Update the user state with the fetched data
    }

    catch (error) {
      console.error('Failed to fetch user data', error);
    }
  }

  fetchUser(); // Call the fetchUser function to get user data


  let intervalID;
  if (autoRefresh ) { // Check if auto-refresh is enabled or if it exists or if it is true
      intervalID = setInterval(() => { 
      console.log("fetching user data...");
      fetchUser(); // Call the fetchUser function to get user data
  
    }, 3000); // Set an interval to fetch user data every 3 seconds
  
    //CLEANUP FUNCTION
    return () => {
      console.log('Cleaning up the data...');
      clearInterval(intervalID); // Clear the interval when the component unmounts
      console.log("Stop the connection to tje API")
    };
  }

}, [autoRefresh]); // Empty dependency array means this effect runs once when the component mounts


  return (
    <div className="app">
      <h1>Random User Viewer</h1>
      <button onClick={() => setAutoRefresh(!autoRefresh)}>

        {/* TERNARY OPERATOR */}
        {/* {condition ? option A : option B} */}
        {autoRefresh ? 'Stop Auto Refresh' : 'Start Auto Refresh'}
      </button>


      {/* SHORT-CIRCUIT CONDITIONAL RENDERING */}
      {/* {condition && Expression} */}
      {/* if the user exists (that is, if it is either true or it is defined ), then display the expression. It does not target the false option */}
    
      {user && <UserCard user={user} /> }
    </div>


  );
};

export default Viewer;

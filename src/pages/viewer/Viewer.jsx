import React, { useState, useEffect } from 'react';
// import './Viewer.css';
import UserCard from '../../component/UserCard/UserCard';

const Viewer = () => {
  const [user, setUser] = useState(null); // State to store the fetched user data
  const [autoRefresh, setAutoRefresh] = useState(true); // State to control auto-refreshing of user data
  //It controls whether new users should automatically be fetched every 5 seconds.




 useEffect(() => {
   // Function to fetch user data from the API
   const fetchUser = async() => {
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


 
  
}, [autoRefresh]); // Empty dependency array means this effect runs once when the component mounts

// const justRefresh = () => {
//   setAutoRefresh(!autoRefresh); // Toggle the auto-refresh state
//   // console.log('Auto refresh toggled:', autoRefresh);
// }

  // useEffect(() => {
  // const fetchUser = async () => {
  //   try {
  //     const res = await fetch('https://randomuser.me/api/');
  //     const data = await res.json();
  //     setUser(data.results[0]);
  //   } catch (err) {
  //     console.error('Failed to fetch user:', err);
  //   }
  // };

  
  //   fetchUser(); // initial fetch

  //   let interval;
  //   if (autoRefresh) {
  //     interval = setInterval(() => {
  //       fetchUser();
  //       console.log('Fetching new user...');
  //     }, 5000); // refresh every 5 seconds
  //   }

  //   return () => {
  //     console.log('Cleaning up...');
  //     clearInterval(interval); // cleanup function that runs when a component unmounts
  //   };
  // }, [autoRefresh]);

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
      {user && <UserCard user={user} />}
    </div>


  );
};

export default Viewer;

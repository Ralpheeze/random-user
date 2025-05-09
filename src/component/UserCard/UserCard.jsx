import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <img src={user.results[0].picture.large} alt="User" />{/* If the results property wasn't an array, we would have user.results.0.picture */} 
      <h2>{user.results[0].name.title} {user.results[0].name.first} {user.results[0].name.last} </h2>
      <p>Age: {user.results[0].dob.age}</p>
      <p>Date: {user.results[0].dob.date}</p>
      <p>Email: {user.results[0].gender}</p>
      <p>Country: {user.results[0].location.country}</p>
    </div>
  );
};

export default UserCard;

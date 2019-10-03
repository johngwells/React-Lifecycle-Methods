import React from 'react';

const Github = ({ users, followers }) => {
  return (
    <div>
      <img src={users.avatar_url} alt='user'/>
      <p>{users.name}</p>
      <p>{users.location}</p>
      <p>{users.bio}</p>
      <h2>{users.name} followers:</h2>
      {followers.map(follower => (
        <div key={follower.id}>
          <img src={follower.avatar_url} alt='follower'/>
        </div>
      ))}
    </div>
  )
}

export default Github;

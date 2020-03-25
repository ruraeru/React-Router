import React from 'react';

function Profile({ user }) {
  const { email, password, name } = user || {};
  return (
    <>
      <h1>Profile</h1>
      <p>Email : {email}</p>
      {/* <dd>{email}</dd> */}
      <p>Password : {password}</p>
      {/* <dd>{password}</dd> */}
      <p>Name : {name}</p>
      {/* <dd>{name}</dd> */}
    </>
  );
}

export default Profile;
import React from 'react'

function Prop({user}) {
  const {myName, myId, myEmail} = user
  return (
    <div>
        <h2>userName: {myName}</h2>
        <h2>UserId: {myId}</h2>
        <h2>userEmail: {myEmail}</h2>
    </div>
  )
}

export default Prop

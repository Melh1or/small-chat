import React, {useState} from 'react'
import axios from 'axios'
import socket from "../socket";

const JoinBlock = ({ onLogin }) => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async e => {
    e.preventDefault()

    if(!roomId || !userName)
       return alert('Room id and User Name are required')

    setIsLoading(true)
    await axios.post('/rooms', { roomId, userName })

    onLogin({ roomId, userName })
  }

  return (
    <form onSubmit={onSubmit} className="join-block">
      <input
        type="text"
        value={roomId}
        onChange={e => setRoomId(e.target.value)}
        placeholder="Room ID"
      />
      <input
        type="text"
        value={userName}
        onChange={e => setUserName(e.target.value)}
        placeholder="User Name"
      />
      <button
        type={"submit"}
        className="btn btn-success"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  )
}

export default JoinBlock
import React, { useState } from 'react'
import { Avatar } from "@mui/material"
import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import './MessageSender.css'

function MessageSender() {
  const [input, setInput] = useState();
  const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
          <Avatar />
          <form>
            <input 
            placeholder={`What's on your mind?`}
            className="messageSender__input"
            />
            <input className="messageSender__input" placeholder='image URL (Optional)' />
            <button onClick={handleSubmit} type="submit">
                Hidden Sumbit
            </button>
          </form>
        </div>
        <div className='messageSender__bottom'>
            <div className='messageSender__option'>
                <Videocam style={{ color: 'red' }} />
                <h3>Live Video</h3>
            </div>
            <div className='messageSender__option'>
                <PhotoLibrary style={{ color: 'green' }} />
                <h3>Photo/Video</h3>
            </div>
            <div className='messageSender__option'>
                <InsertEmoticon style={{ color: 'orange' }} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender
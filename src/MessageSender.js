import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import './MessageSender.css';
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase/compat/app";


function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
        event.preventDefault();

        db.collection('posts').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl
        })

        setInput('');
        setImageUrl('');
  }

  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
          <Avatar src={user.photoURL} />
          <form>
            <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={`What's on your mind? ${user.displayName}`}
            className="messageSender__input"
            />
            <input 
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            placeholder='image URL (Optional)' />
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
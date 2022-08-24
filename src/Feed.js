import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from "./MessageSender"
import Post from './Post'
import './Feed.css'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />

        <Post 
          profilePic='https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/240524209_4264211820283339_6038973612453097192_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6OnlZsEYNXcAX_n_8Su&_nc_ht=scontent.fsof9-1.fna&oh=00_AT88s8ABrR08QVE2uQXsam_xrvhH_zBquE99ByQeus4yMA&oe=630AC9EE'
          message='Wow this works'
          timestamp='11:45'
          username='georgi.f.nedyalkov'
          image='https://img.freepik.com/free-vector/space-background-with-planet-landscape_107791-6146.jpg?w=1800&t=st=1661350127~exp=1661350727~hmac=1866104ba6302e440e9e2a07613c378d8acec1944e09135871723a6377152e48'
        />
        <Post 
          profilePic='https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/240524209_4264211820283339_6038973612453097192_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6OnlZsEYNXcAX_n_8Su&_nc_ht=scontent.fsof9-1.fna&oh=00_AT88s8ABrR08QVE2uQXsam_xrvhH_zBquE99ByQeus4yMA&oe=630AC9EE'
          message='Wow this works'
          timestamp='11:45'
          username='georgi.f.nedyalkov'
        />
        <Post />
    </div>
  )
}

export default Feed
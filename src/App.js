import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Homepage from './components/Homepage'

function App() {

  //q= is equivelant to the input search term, API key must be generated with google account
  // Search Result Paramaters with my API key
  // Google Developer Console => API dashboard
  // Credentials => +Create Credentials (restrict key if you want)
  //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=lego&key=AIzaSyBkRxNBktlEpXjJcwPQRHwvRgYYXP3MOiQ


  //OR search by video ID, available from searchResult response 
  //https://www.googleapis.com/youtube/v3/videos?part=snippet&id=Tqth0fKo0_g&maxResults=5&key=AIzaSyBkRxNBktlEpXjJcwPQRHwvRgYYXP3MOiQ
 
  //iframe with a src attribute set equal to:
  // https://www.youtube.com/embeded/${video.id.videoId}
  // allowFullScreen title=Video Player
 
  const key = `AIzaSyBkRxNBktlEpXjJcwPQRHwvRgYYXP3MOiQ`

  const getYTdata = (e, search) => {
    e.preventDefault()
    // debugger
    //paramaters 
    //title
    //jpeg 
    //videoId
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${search}&key=${key}`)
      .then( res => res.json())
      .then( video => {
        setVideo(video)
      })
  }
  const [video, setVideo] = useState({})
  const [searchTerm, setTerm] = useState('')
  // const vidSrc = `https://www.youtube.com/embeded/${video.id.videoId}`
  return (
    console.log("the video is:", video),
    <div className="App">
        <Homepage />
        <form onSubmit={(e) => getYTdata(e, searchTerm)}>
          Search
          <input name="search" 
          onChange={(e) => setTerm( e.target.value )}></input>
        </form>
        {/* logic to check if video.items(the array of videos) is undefined */}
        {/* if it is undefined, render nothing, if there is a video in state, render the iframe */}
        {video.items == undefined ? null : <iframe src={`https://www.youtube.com/embed/${video.items[0].id.videoId}`} allowFullScreen width="300px" height="500px" title="Video player" /> }
    </div>
  );
}

export default App;

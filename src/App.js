import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import youtube from './components/youtube'
import Homepage from './components/Homepage'
import axios from 'axios';

function App() {
  //q= is equivelant to the input search term, API key must be generated with google account
  // Search Result Paramaters with my API key
  // Google Developer Console => API dashboard
  // Credentials => +Create Credentials (restrict key if you want)
  //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=lego&key=AIzaSyBkRxNBktlEpXjJcwPQRHwvRgYYXP3MOiQ


  //OR search by video ID, available from searchResult response 
  //https://www.googleapis.com/youtube/v3/videos?part=snippet&id=Tqth0fKo0_g&maxResults=5&key=AIzaSyBkRxNBktlEpXjJcwPQRHwvRgYYXP3MOiQ
  const key = `AIzaSyBkRxNBktlEpXjJcwPQRHwvRgYYXP3MOiQ`

  const getYTdata = (e, search) => {
    e.preventDefault()
    // debugger
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${key}`)
      .then( res => res.json())
      .then( data => console.log(data))
  }
  const [videos, setVideos] = useState([])
  const [searchTerm, setTerm] = useState('')
    
  return (
    <div className="App">
        <Homepage />
        <form onSubmit={(e) => getYTdata(e, searchTerm)}>
          Search
          <input name="search" 
          onChange={(e) => setTerm( e.target.value )}></input>
        </form>
    </div>
  );
}

export default App;

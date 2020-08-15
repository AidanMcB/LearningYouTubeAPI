import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import youtube from './components/youtube'
import Homepage from './components/Homepage'
import axios from 'axios';

function App() {

  const key = `AIzaSyBkRxNBktlEpXjJcwPQRHwvRgYYXP3MOiQ`

  // const getYTdata = () => {
  //   fetch(`https://www.googleapis.com/youtube/v3/snippet/5/${key}`)
  //     .then( res => res.json())
  //     .then( data => console.log(data))
  // }
  const [videos, setVideos] = useState([])
  const [searchTerm, setTerm] = useState('')
    
    const handleSubmit = async (e,search) => {
      debugger
      e.preventDefault()
      const response = await youtube.get('/search', {
        params: {
          q: search
        }
      })
        setVideos({
        videos: response.data.items
      })
      console.log("this is resp", response);
    } 
  



  return (
    <div className="App">
        <Homepage />
        <form onSubmit={(e, search) => handleSubmit(e, search)}>
          Search
          <input name="search" ></input>
        </form>
        <button onClick={() => console.log("test")}>Data Button</button>
    </div>
  );
}

export default App;

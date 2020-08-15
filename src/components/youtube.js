import React from 'react'
import axios from 'axios';
const key = `AIzaSyBkRxNBktlEpXjJcwPQRHwvRgYYXP3MOiQ`


    export default axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3/',
      params: {
        part: 'snippet',
        maxResults: 5,
        key: key
      }
    })
  
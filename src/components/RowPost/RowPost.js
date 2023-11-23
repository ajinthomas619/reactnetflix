import React,{useEffect,useState} from 'react';
import Youtube from 'react-youtube' 
import './RowPost.css';
import axios from '../../axios';
import {imageurl,APIKEY} from '../../constants/constants'


function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
useEffect(()=>{
  axios.get(props.url).then(response=>{
    console.log(response.data);
    setMovies(response.data.results)

  }).catch(err=>{
    alert('Network Error')
  })
},[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?language=en-US&api_key=${APIKEY}&language=en-US`).then(response=>{
 if(response.data.results.length!==0){
  setUrlId(response.data.results[0])
 }
 else{
  console.log('Trailer Not Available');
 }
})
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>{
return(
  <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageurl+obj.backdrop_path}`}></img>

)
          })}
        </div>
      { urlId &&     <Youtube opts={opts} videoId={urlId.key}/>}  
    </div>
  )
}

export default RowPost
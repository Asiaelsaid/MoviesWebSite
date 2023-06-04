import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosConfig/instance";
const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({})

  useEffect(() => {
    axiosInstance
      .get(`${params.id}`)
      .then((res) => {
        console.log(res.data)

        setMovie(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

      
  }, [params.id])

  return (
    <div>
        
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{height:"400px", width:'450px'}} alt="img"/>
        
      <h3>{movie.title}</h3>
      <p> {movie.overview}</p>
      <p> {movie.release_date}</p>
    </div>
  );
};
export default MovieDetails;

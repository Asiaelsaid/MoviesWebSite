import React, { useEffect, useState } from "react";
// import axiosInstance from "../../axiosConfig/instance";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
// import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";
import addToFavoirteAction from './../../Store/Actions/addFavorite';
import moviesaAction from './../../Store/Actions/movies'
// import Movies from './../Products/Products';


const Movies = () => {
  
  // const [value, setValue] = useState("");
  let [change, setChange] = useState(1);
  const movies= useSelector((state)=>state.movies.movies);
  const favoriteList= useSelector((state)=>state.favorite.favorite);
  const favoriteId=useSelector((state)=>state.favorite.favorite.map((item)=>item.id));
  const dispatch=useDispatch();
  const favoriteFunction=(obj)=>{
  
    dispatch(addToFavoirteAction([...favoriteList,obj]));

  }
  
  function next(){
    change++;
    setChange(change)
  }
  function prev(){
    change--;
    setChange(change)
  }

  // useEffect(()=>{
  //   axiosInstance
  //     .get(`/popular?page=${change}`)
  //     .then((res) => {
  //       setMovies(res.data.results);
  //       console.log(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
    

  // },[change])
  
  useEffect(() => {
 dispatch(moviesaAction())
  }, []);

  // const handleSearch=(e)=>{
  //   e.preventDefault();

  //   return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=84e232612468edb90f073d13b93dbca2&query=${value}`).then((res)=>{
  //     console.log(res);
  //     setMovies(res.data.results)
  //   }).catch((err)=>{console.log(err);
      
  //   })
  //     }

  return (
    <>
      {/* <Form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
      > 
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="search name ....."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
           <Button variant="secondary" type="submit">Search</Button>
        </Form.Group>
      </Form> */}
     
      <Row xs={1} md={2} className="g-4">
        {movies.map((movie) => (
          <Col>
            <Card key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                {" "}
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="img-fluid"
                  style={{ height: "500px" }}
                />
              </Link>

              <Card.Body>
                <Card.Title> {movie.original_title}</Card.Title>
                <Card.Text>
                  {movie.overview}
                  <br></br>
                  {movie.release_date}
                </Card.Text>
                <i className= {favoriteId.includes(movie.id)?"fa-solid fa-heart":"fa-regular fa-heart"} onClick={()=>{favoriteFunction(movie)}}></i>  
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="success" onClick={()=>{next()}}>Next</Button>
  <Button variant="warning" onClick={()=>{prev()}}>prev</Button>
    </>
  );
};
export default Movies;

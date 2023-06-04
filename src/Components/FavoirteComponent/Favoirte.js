import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import addToFavoirteAction from './../../Store/Actions/addFavorite';
import { Link } from "react-router-dom";
const Favorite= ()=>{
    const dispatch=useDispatch();
   
    const favoriteList= useSelector((state)=>state.favorite.favorite);
    const deleteFavorite =(id)=>{ const list = favoriteList.filter(f => f.id !== id)
         dispatch(addToFavoirteAction(list)) }
return <>
<Row xs={1} md={2} className="g-4">
        {favoriteList.map((movie) => (
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
                <i className= "fa-solid fa-heart" onClick={()=>{deleteFavorite(movie.id)}}></i>  
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

</>
}
export default Favorite;
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';

export default function ModalMovie(props){
    async function handleAddFav(e, movie){
        e.preventDefault();
        // values=[newMovie.title,newMovie.release_date,newMovie.poster_path,newMovie.overview,newMovie.comment];
       const dataToBeSent = {
        title: movie.title,
        release_date:movie.release_date,
        poster_path:movie.posterPath,
        overview:movie.overview,
        comment:movie.comment
       }
       const url = `${process.env.REACT_APP_SERVER}/addmovie`;
       const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToBeSent)
})
const data = await response.json();
        console.log(response.status);
        console.log(data);
    }
    return (
        <>
        <Modal show={props.show} onHide={props.ModalMoviehandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                 <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.chosenMovie.posterPath}`} />
                 <p>User Comment: {props.chosenMovie.comment? props.chosenMovie.comment: "No Comment is added"}</p>
                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="primary" type="submit" onClick={(e)=>{handleAddFav(e,props.chosenMovie)}}>
                            Add to favorite
                        </Button>
                    </Form>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                   
                </Modal.Footer>
            </Modal>
        </>
    );
}
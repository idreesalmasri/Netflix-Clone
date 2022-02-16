import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export default function Movie(props) {
   
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovie] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleShowModal(data) {
        
        handleShow();
        setChosenMovie(data)
    }
    return (
        <>
            <h1>trending movies List:</h1>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/w1280/${props.data.posterPath}`} />

                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Button variant="primary" onClick={() => { handleShowModal(props.data) }}>Show Modal</Button>
                    </Card.Body>
                </Card>
                {
                    chosenMovie 
                }

            </div>





        </>
    )
}
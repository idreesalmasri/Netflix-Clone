import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from "./ModalMovie";
import { useState } from 'react';
import { useRef } from 'react';

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
            
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/w1280/${props.data.posterPath}`} />

                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Text>
                                        {props.data.comment ? props.data.comment : "No Comment is Added"}
                                    </Card.Text>
                        <Button variant="primary" onClick={() => { handleShowModal(props.data) }}>Show Modal</Button>
                    </Card.Body>
                </Card>
                {
                    chosenMovie &&  <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie}/>
                }

            </div>





        </>
    )
}
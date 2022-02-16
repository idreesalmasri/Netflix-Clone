import NavBar from "./Navbar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from 'react';

export default function FavList() {
    const [favListData, setFavListData] = useState();

    async function getDataFromDB() {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/getallmovie`);
        const data = await response.json();
        setFavListData(data);
    }
    useEffect(() => {
        getDataFromDB();
    }, []);
    async function handleDelete(id) {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/DELETE/${id}`, {
            method: 'DELETE',
        });
        if(response.status === 204){
            alert("Deleted successfully, refresh to update the list")
        }
    }
        return (
            <>
                <h1>This is my favorite list of Moviess</h1>
                {
                    favListData && favListData.map(props => {
                        return (

                            <Card key={props.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${props.poster_path}`} />

                                <Card.Body>
                                    <Card.Title>{props.title}</Card.Title>

                                    <Button variant="primary" onClick={() => { handleDelete(props.id) }}>Delete</Button>
                                </Card.Body>
                            </Card>


                        )
                    })
                }
            </>
        )
    }
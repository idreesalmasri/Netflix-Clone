import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
export default function Home(){
    const [trend, setTrend] = useState();
    const getMovie = async () => {
        try {
            
            const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
            const data = await response.json();
            // console.log(data);
            setTrend(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    return(
        <>
        <h1>Home</h1>
        {
             trend && (<MovieList movies={trend} />)
        }
        
        </>
    );
}
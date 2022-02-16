import Movie from './Movie'
export default function MovieList(props){
    console.log(props.movies);
    return (
        <>
        <h1>trending movies List:</h1>
         {
               props.movies.map(ele => {
                return(
                   <>
                  <Movie data = {ele}/>

                </>
                )
            
         })
         }   
        
        </>
    )
}
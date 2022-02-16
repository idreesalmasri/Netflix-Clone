import Movie from './Movie'
export default function MovieList(props){
    console.log(props.movies);
    return (
        <>
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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    
    const {id} = useParams();
    console.log("id" , id);

    const [movie, setmovie] = useState("");

    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        console.log("response" , response);
        
        const json = await response.json();
        console.log("json" , json);
        
        setmovie(json.data.movie);
        console.log("movie" , {movie});

    }

    useEffect(() => {
        getMovie();
    }, [])

    return <h1>Detail</h1>
}

export default Detail;
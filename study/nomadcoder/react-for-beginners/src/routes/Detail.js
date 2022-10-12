import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie);
  };

  //id값을 가지고 api에 요청
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <div>
          <div><img src={movieInfo.medium_cover_image} /></div>
          <h3>{movieInfo.title} ({movieInfo.year})</h3>
          <div>{movieInfo.genres}</div>
      </div>
    </div>
  );
}

export default Detail;

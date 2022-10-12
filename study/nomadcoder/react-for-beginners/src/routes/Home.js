import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false); // movies데이터가 세팅되면 로딩 끝내고 데이터 노출시키기
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

// src/RecommendedMovies.js
import { useEffect, useState } from "react";
import movieService from "../services/movieService";
import propsType from "prop-types";
import { Link } from "react-router-dom";
import { register } from "swiper/element/bundle";
register();

const RecommendedMovies = ({ movieId, title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresArray = await movieService.getGenres();
        const genresMap = genresArray.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});
        setGenres(genresMap);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await movieService.getRecommendedMovies(movieId);
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between">
        <h1 className="font-bold capitalize text-gray-800 dark:text-white">
          {title}✨
        </h1>
        <Link className="text-sm font-bold text-indigo-800 dark:text-indigo-400">
          View All
        </Link>
      </div>
      <div className="mt-4">
        <swiper-container slides-per-view="auto" space-between="30" loop="true">
          {movies.map((movie) => (
            <swiper-slide
              key={movie.id}
              style={{ width: "fit-content", cursor: "pointer" }}
            >
              <div className="w-[180px]">
                <img
                  className="rounded-2xl"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="mt-2 flex flex-col">
                <h2 className="w-[180px] truncate font-bold text-gray-800 dark:text-white">
                  {movie.title}
                </h2>
                <p className="w-[180px] truncate text-sm text-gray-500 dark:text-gray-300">
                  {movie.genre_ids.map((id) => genres[id]).join(", ")}
                </p>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
};

RecommendedMovies.propTypes = {
  movieId: propsType.number.isRequired,
  title: propsType.string.isRequired,
};

export default RecommendedMovies;

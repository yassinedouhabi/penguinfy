import PropTypes from "prop-types";
import CustomSwiper from "./CustomSwiper";
import { useEffect, useState } from "react";
import movieService from "../services/movieService";
import { register } from "swiper/element/bundle";
register();

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await movieService.getPopularMovies();
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const renderSlide = (movie) => {
    return (
      <div
        className="relative z-10 h-[50dvh] md:h-[90dvh]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80"></div>²
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
          <h1 className="w-1/2 text-balance text-3xl font-bold text-white md:text-6xl">
            {movie.title}
          </h1>
          <p className="w-1/2 truncate text-white/80">{movie.overview}</p>
          <button className="mt-4 rounded bg-white p-2 text-black">Play</button>
        </div>
      </div>
    );
  };

  if (loading)
    return (
      <div className="fixed inset-0 z-30 flex h-full w-full flex-col items-center justify-center bg-opacity-60 bg-clip-padding p-4 text-black backdrop-blur backdrop-filter dark:text-white">
        Penguinfy Loading...
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-[45dvh] md:h-[90dvh]">
      <div className="absolute inset-0 h-[50dvh] bg-red-500 md:h-[90dvh]">
        <CustomSwiper items={movies} renderSlide={renderSlide} />;
      </div>
    </div>
  );
};

PopularMovies.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PopularMovies;

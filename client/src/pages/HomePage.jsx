// import PopularMovies from "../components/PopularMovies";
import { useEffect, useState } from "react";
import movieService from "../services/movieService";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const data = await movieService.getPopularMovies();
        setMovies(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section id="home" className="mt-8 w-full">
      <div className="absolute inset-0 -z-10 h-[50dvh] bg-red-500 md:h-dvh">
        <swiper-container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100vw",
          }}
        >
          {movies.map((movie) => (
            <swiper-slide
              key={movie.id}
              className="flex h-full items-center justify-center"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt=""
                className="flex h-full w-full items-center justify-center object-cover"
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}

export default Home;

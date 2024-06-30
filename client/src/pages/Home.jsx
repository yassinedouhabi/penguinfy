import PopularMovies from "../components/PopularMovies";
import RecommendedMovies from "../components/RecommendedMovies";

function Home() {
  const movieId = 550;
  return (
    <section id="home" className="mt-8 w-full">
      <PopularMovies title="Most popular now" />
      <RecommendedMovies movieId={movieId} title="Recommended for you" />
      <RecommendedMovies movieId={movieId} title="Recommended for you" />
      <RecommendedMovies movieId={movieId} title="Recommended for you" />
    </section>
  );
}

export default Home;

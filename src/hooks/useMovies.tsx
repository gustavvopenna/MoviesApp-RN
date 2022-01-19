import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/MovieInterface";

export const useMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoding] = useState(true)

  const getMovies = async () => {
    const response = await movieDB.get<MovieDBNowPlaying>('/now_playing')
    setNowPlayingMovies(response.data.results)
    setIsLoding(false)
  }

  useEffect(() => {
    getMovies()
  }, []);

  return {
    nowPlayingMovies,
    isLoading
  }
};

import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlayingResponse } from "../interfaces/MovieInterface";

interface MoviesState {
  nowPlaying: Movie[],
  popular: Movie[],
  topRated: Movie[],
  upcoming: Movie[]
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  })
  const [isLoading, setIsLoding] = useState(true)

  const getMovies = async () => {
    const nowPlayingpromise = movieDB.get<MovieDBNowPlayingResponse>('/now_playing')
    const popularPromise = movieDB.get<MovieDBNowPlayingResponse>('/popular')
    const topRatedPromise = movieDB.get<MovieDBNowPlayingResponse>('/top_rated')
    const upcomingPromise = movieDB.get<MovieDBNowPlayingResponse>('/upcoming')
    
    const responses = await Promise.all([
      nowPlayingpromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise
    ])
    setMoviesState({
      nowPlaying: responses[0].data.results,
      popular: responses[1].data.results,
      topRated: responses[2].data.results,
      upcoming: responses[3].data.results,
    })
    setIsLoding(false)
  }

  useEffect(() => {
    getMovies()
  }, []);

  return {
    ...moviesState,
    isLoading
  }
};

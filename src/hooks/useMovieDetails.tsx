import { useEffect, useState } from "react"

import movieDB from "../api/movieDB"
import { Cast, CastResponse, MovieDetailsResponse } from "../interfaces/MovieInterface"

interface MovieDetails {
  fullMovie: MovieDetailsResponse;
  isLoading: boolean;
  cast: CastResponse
}

export const useMovieDetails = (movieId: string | number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    fullMovie: {} as MovieDetailsResponse,
    isLoading: true,
    cast: {} as CastResponse
  })

  const getMovieDetails = async () => {
    const movieDetailPromise = await movieDB.get<MovieDetailsResponse>(`/${movieId}`)
    const castPromise = await movieDB.get<CastResponse>(`/${movieId}/credits`)
    
    const response = await Promise.all([
      movieDetailPromise,
      castPromise
    ])
    setMovieDetails({
      isLoading: false,
      fullMovie: response[0].data,
      cast: response[1].data
    })
    console.log({ fullMovie: movieDetails.fullMovie })
  }
  
  useEffect(() => {
    getMovieDetails()
  }, []);

  return {
    ...movieDetails
  }
}
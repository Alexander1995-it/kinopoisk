import {instance} from "./https.service";

export const moviesService = {
    getMovies(limit: number, page: number, filter: FilterMoviesType) {
        return instance.get<MoviesResponseType>(`movie?limit=${limit}&page=${page}&type=${filter}`)
    }
}

export type MoviesResponseType = {
    limit: number
    page: number
    pages: number
    total: number
    filterMovies: FilterMoviesType
    docs: MovieType[]
    currentMovie: MovieType
}

export type FilterMoviesType = 'movie' | 'tv-series' | 'cartoon' | 'anime' | 'animated-series'

export type MovieType = {
    alternativeName?: string
    countries?: Array<{ name: string }>
    description?: string
    enName?: string | null
    externalId?: Array<{ imdb: string, kpHD: string, tmdb: number }>
    genres?: Array<{ name: string }>
    id?: number
    logo?: { url: string }
    movieLength?: number
    name?: string
    names?: Array<{ name: string }>
    poster?: { previewUrl: string, url: string }
    rating?: { await: null, filmCritics: number, imdb: number, kp: number, russianFilmCritics: number }
    shortDescription?: string
    type?: string
    votes?: { await: number, filmCritics: number, imdb: number, kp: number, russianFilmCritics: number }
    watchability?: {
        items: Array<{
            logo: { url: string },
            name: string,
            url: string
        }>
    }
    year?: number

}

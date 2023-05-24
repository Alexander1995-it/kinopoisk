import {instance} from "./https.service";

export const moviesService = {
    getMovies(limit: number) {
        return instance.get<MoviesResponseType>(`movie?limit=${limit}`)
    }
}

export type MoviesResponseType = {
    limit: number
    page: number
    pages: number
    total: number
    docs: MovieType[]
}

export type MovieType = {
    alternativeName: string
    countries: Array<{ name: string }>
    description: string
    enName: string | null
    externalId: Array<{ imdb: string, kpHD: string, tmdb: number }>
    genres: Array<{ name: string }>
    id: number
    logo: { url: string }
    movieLength: number
    name: string
    names: Array<{ name: string }>
    poster: { previewUrl: string, url: string }
    rating: { await: null, filmCritics: number, imdb: number, kp: number, russianFilmCritics: number }
    shortDescription: string
    type: string
    votes: { await: number, filmCritics: number, imdb: number, kp: number, russianFilmCritics: number }
    watchability: {
        items: Array<{
            logo: { url: string },
            name: string,
            url: string
        }>
    }
    year: number

}

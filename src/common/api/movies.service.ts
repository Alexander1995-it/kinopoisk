import {instance} from "common/api/https.service";

export const moviesService = {
    getMovies(params: querySearchMoviesType) {
        // return instance.get<MoviesResponseType>(`movie?limit=${limit}&page=${page}&type=${filter}&poster=!null&name=!null`)
        return instance.get<MoviesResponseType>('movie', {params})
    },
    getMovieById(id: number) {
        return instance.get<InfoMovieType>(`movie/${id}`)

    }
}

export type MoviesResponseType = {
    limit: number
    currentPage: number | null
    defaultPage: number
    pages: number
    total: number
    type: FilterMoviesType
    docs: MovieType[]
}

export type FilterMoviesType = 'movie' | 'tv-series' | 'cartoon' | 'anime' | 'animated-series'

export type querySearchMoviesType = {
    limit?: number
    page?: number | null
    type?: FilterMoviesType | null
    poster?: '!null'
    name?: string
}

export type MovieType = {
    externalId: {
        kpHD: string;
        imdb: string;
        tmdb: number;
    }
    rating: {
        kp: number;
        imdb: number;
        filmCritics: number;
        russianFilmCritics: number;
        await?: any;
    }
    votes: {
        kp: number;
        imdb: number;
        filmCritics: number;
        russianFilmCritics: number;
        await: number;
    }
    movieLength: number
    id: number
    type: string
    name: string
    description: string
    year: number
    poster: {
        url: string;
        previewUrl: string;
    }
    genres: Array<{ name: string }>
    countries: Array<{ name: string }>
    alternativeName: string;
    enName?: any
    names: Array<{ name: string }>
    shortDescription: string
    logo: { url: string }
    watchability: { items: Array<{ name: string, logo: { url: string }, url: string }> }
}


export type InfoMovieType = {
    fees: GggFees;
    status?: any;
    externalId: GggExternalId;
    rating: GggRating;
    votes: GggVotes;
    backdrop: GggBackdrop;
    movieLength: number;
    images: GggImages;
    productionCompanies: GggProductionCompanies[];
    spokenLanguages: GggSpokenLanguages[];
    id: number;
    type: string;
    name: string;
    description: string;
    distributors: GggDistributors;
    premiere: GggPremiere;
    slogan: string;
    year: number;
    budget: GggBudget;
    poster: GggPoster;
    facts: GggFacts[];
    genres: GggGenres[];
    countries: GggCountries[];
    videos: GggVideos;
    seasonsInfo: any[];
    persons: GggPersons[];
    lists: any[];
    typeNumber: number;
    alternativeName: string;
    enName?: any;
    names: GggNames[];
    similarMovies: GggSimilarMovies[];
    updatedAt: string;
    imagesInfo: GggImagesInfo;
    sequelsAndPrequels: any[];
    ratingMpaa: string;
    shortDescription: string;
    technology: GggTechnology;
    ticketsOnSale: boolean;
    ageRating: number;
    logo: GggLogo;
    watchability: GggWatchability;
    top10?: any;
    top250: number;
    audience: GggAudience[];
    deletedAt?: any;
    isSeries: boolean;
    seriesLength?: any;
    totalSeriesLength?: any;
}
export type GggFeesWorld = {
    value: number;
    currency: string;
}
export type GggFeesRussia = {
    value: number;
    currency: string;
}
export type GggFeesUsa = {
    value: number;
    currency: string;
}
export type GggFees = {
    world: GggFeesWorld;
    russia: GggFeesRussia;
    usa: GggFeesUsa;
}
export type GggExternalId = {
    kpHD: string;
    imdb: string;
    tmdb: number;
}
export type GggRating = {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await?: any;
}
export type GggVotes = {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}
export type GggBackdrop = {
    url: string;
    previewUrl: string;
}
export type GggImages = {
    postersCount: number;
    backdropsCount: number;
    framesCount: number;
}
export type GggProductionCompanies = {
    name: string;
    url: string;
    previewUrl: string;
}
export type GggSpokenLanguages = {
    name: string;
    nameEn: string;
}
export type GggDistributors = {
    distributor: string;
    distributorRelease: string;
}
export type GggPremiere = {
    world: string;
    russia: string;
}
export type GggBudget = {
    value: number;
    currency: string;
}
export type GggPoster = {
    url: string;
    previewUrl: string;
}
export type GggFacts = {
    value: string;
    type: string;
    spoiler: boolean;
}
export type GggGenres = {
    name: string;
}
export type GggCountries = {
    name: string;
}
export type GggVideosTrailers = {
    url: string;
    name: string;
    site: string;
    type: string;
}
export type GggVideos = {
    trailers: GggVideosTrailers[];
    teasers: any[];
}
export type GggPersons = {
    id: number;
    photo: string;
    name: string;
    enName: string;
    description: string;
    profession: string;
    enProfession: string;
}
export type GggNames = {
    name: string;
}
export type GggSimilarMoviesPoster = {
    url: string;
    previewUrl: string;
}
export type GggSimilarMovies = {
    id: number;
    name: string;
    enName?: any;
    alternativeName: string;
    type: string;
    poster: GggSimilarMoviesPoster;
}
export type GggImagesInfo = {
    framesCount: number;
}
export type GggTechnology = {
    hasImax: boolean;
    has3D: boolean;
}
export type GggLogo = {
    url: string;
}
export type GggWatchabilityItemsLogo = {
    url: string;
}
export type GggWatchabilityItems = {
    name: string;
    logo: GggWatchabilityItemsLogo;
    url: string;
}
export type GggWatchability = {
    items: GggWatchabilityItems[];
}
export type GggAudience = {
    count: number;
    country: string;
}
import {instance} from "./https.service";


export const moviesService = {
    getMovies() {
        return instance.get('movie')
    }
}


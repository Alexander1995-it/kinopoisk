import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "store/store";
import style from './InfoMovie.module.scss'
import {fetchMovie} from "store/movieReducer";
import {useParams} from "react-router-dom";
import {Loading} from "common/lib/Loading/Loading";
import ReactPlayer from "react-player";
import DescriptionMovie from "components/InfoMovie/DescriptionMovie/DescriptionMovie";


const InfoMovie = () => {

    const dispatch = useAppDispatch()

    const {id} = useParams()

    const isLoading = useAppSelector(state => state.app.isLoading)
    const infoMovie = useAppSelector((state) => state.movie.infoMovie)

    useEffect(() => {
        if (id) {
            dispatch(fetchMovie(+id))
        }
    }, [])

    const trailerYoutube = infoMovie?.videos && infoMovie?.videos.trailers?.find(el => el.site === 'youtube')
    console.log(infoMovie)
    return <>
        {isLoading
            ? <div className={style.loadingBlock}>
                <Loading/>
            </div>
            : infoMovie &&
            <div className={style.infoMovieBlock}>
                <div className={style.infoMovieWrapper} style={{color: "white"}}>
                    <div className={style.imgBlock}>
                        <img src={infoMovie.poster.url} alt=""/>
                    </div>
                    <div className={style.descriptionMovie}>
                        <DescriptionMovie/>
                        {trailerYoutube && <div className={style.playerBlock}>
                            <ReactPlayer width='100%'
                                         height='100%'
                                         controls={true}
                                         volume={0.5}
                                         url={trailerYoutube?.url}/>
                        </div>
                        }
                    </div>
                </div>
            </div>

        }
    </>

};

export default InfoMovie;
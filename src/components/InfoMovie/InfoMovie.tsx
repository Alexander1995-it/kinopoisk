import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "store/store";
import style from './InfoMovie.module.scss'
import {fetchMovie} from "store/movieReducer";
import {useParams} from "react-router-dom";
import {Loading} from "common/lib/Loading/Loading";
import ReactPlayer from "react-player";


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
    return (
        <>
            {isLoading
                ? <div className={style.loadingBlock}>
                    <Loading/>
                </div>
                : infoMovie &&
                <div className={style.infoMovieBlock}>
                    <div className={style.infoMovieWrapper} style={{color: "white"}}>
                        <div className={style.imgBlock}>
                            <img width='350px' height='500px' src={infoMovie.poster.url} alt=""/>
                        </div>
                        <div className={style.infoBlock}>
                            <div className={style.nameMovie}>
                                {infoMovie.name} ({infoMovie.year})
                            </div>
                            <div className={style.aboutMovie}>
                                <div className={style.titleInfo}>О фильме</div>
                                <div><span className={style.subtitleInfo}>Год производства:</span> {infoMovie.year}
                                </div>
                                <div>
                                    <span className={style.subtitleInfo}>Страна: </span>
                                    {infoMovie.countries.map((el) => el.name).join(', ')}
                                </div>
                                <div>
                                    <span className={style.subtitleInfo}>Жанр: </span>
                                    {infoMovie.genres.map(el => el.name).join(', ')}
                                </div>
                                <div>
                                    <span className={style.subtitleInfo}>Взраст: </span>
                                    {infoMovie.ageRating}+
                                </div>
                                {infoMovie.rating.filmCritics === 0 ||
                                    <div>
                                        <span
                                            className={style.subtitleInfo}>Рейтинг:</span> {infoMovie.rating.filmCritics}
                                    </div>
                                }
                                <div>
                                    <span className={style.subtitleInfo}>Описание:</span>
                                    <div>{infoMovie.description}</div>
                                </div>
                            </div>
                            {trailerYoutube && <div className={style.playerBlock}>
                                <ReactPlayer width='600px'
                                             height='300px'
                                             playing={true}
                                             controls={true}
                                             volume={0.5}
                                             url={trailerYoutube?.url}/>
                            </div>}
                        </div>
                    </div>
                </div>

            }
        </>
    );
};

export default InfoMovie;
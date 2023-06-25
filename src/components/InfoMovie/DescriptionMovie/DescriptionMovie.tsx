import React from 'react';
import style from './DescriptionMovie.module.scss'
import {useAppSelector} from "store/store";

const DescriptionMovie = () => {
    const infoMovie = useAppSelector((state) => state.movie.infoMovie)

    return <>
        {infoMovie &&
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
                            <span className={style.subtitleInfo}>
                                Рейтинг:
                            </span> {infoMovie.rating.filmCritics}
                        </div>
                    }
                    <div>
                        <span className={style.subtitleInfo}>Описание:</span>
                        <div>{infoMovie.description}</div>
                    </div>
                </div>
            </div>
        }
    </>
}

export default DescriptionMovie;
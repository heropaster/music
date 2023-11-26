import React, {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styles.js";
import {useDataStore} from "../../../store";
import type {Track} from "../../../api/openapitools";
import {formatDuration} from "../../../utils/formatDuration";

interface TrackProps {
    track: Track,
}

export const TrackItem: React.FC<TrackProps> = ({track}) => {


    const [changeTrack] = useDataStore((state) => [state.changeCurrentTrack])

    const handleChangeTrack = (track: Track) => {
        changeTrack(track)
    }
    return (

        <S.Item>
            <S.Track onClick={() => handleChangeTrack(track)}>
                <S.Track__title>
                    <S.Track__image>
                        <S.Track__svg>
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.Track__svg>
                    </S.Track__image>
                    <div>
                        <S.Track__link>
                            {track.name}
                        </S.Track__link>
                    </div>
                </S.Track__title>
                <S.Author>
                    <S.Author__link>{track.author}</S.Author__link>
                </S.Author>
                <S.Album>
                    <S.Album__link>{track.album}</S.Album__link>
                </S.Album>
                <div>
                    <S.TimeSvg>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TimeSvg>
                    <S.TimeText>{formatDuration(track.duration_in_seconds)}</S.TimeText>
                </div>
            </S.Track>
        </S.Item>
    );
};

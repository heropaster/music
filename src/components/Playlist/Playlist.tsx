import * as S from "./styles.js";
import {TrackItem} from "./Track/Track";
import {useGetTracksAll} from "../../hooks/useGetTracksAll";
import React, {useState} from "react";
import Skeleton from "react-loading-skeleton";


interface PlaylistProps {
    type?: string
}

export const Playlist: React.FC<PlaylistProps> = ({type}) => {
    const {data: playlist, isPending: isLoading, isSuccess} = useGetTracksAll()

    const smallList = playlist?.data.slice(0, 5)
    return (
        <S.Playlist className="content__playlist playlist">
            {isLoading ? <Skeleton
                baseColor="#202020"
                highlightColor="#444"
                height={"51px"}
                style={{
                    marginBottom: "12px",
                }}
            /> : isSuccess ? (type === 'small' ? smallList?.map((track, index) => (
                <TrackItem
                    key={track.id}
                    track={track}
                />
            )) : playlist?.data.map((track) => (
                <TrackItem
                    key={track.id}
                    track={track}
                />
            ))) : <div>Не удалось загрузить плейлист, попробуйте позже</div>}
            {}

        </S.Playlist>
    );
};

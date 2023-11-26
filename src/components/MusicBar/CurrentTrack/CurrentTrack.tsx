import React, {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styles.js";
import {Track} from "../../../api/openapitools";

interface CurrentTrackProps {
    currentTrack?: Track | null
}

export const CurrentTrack: React.FC<CurrentTrackProps> = ({currentTrack}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => setIsLoading(false), 1000);
        return () => clearInterval(interval);
    }, []);
    return (

        <S.PlayerTrack>
            <S.PlayerTrack__contain>
                <S.PlayerTrack__image>
                    {isLoading ? (
                        <Skeleton
                            width={"51px"}
                            height={"51px"}
                            baseColor="#202020"
                            highlightColor="#444"
                        />
                    ) : (
                        <S.PlayerTrack__svg>
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.PlayerTrack__svg>
                    )}
                </S.PlayerTrack__image>
                {isLoading ? (
                    <Skeleton
                        count={2}
                        width={"49px"}
                        baseColor="#202020"
                        highlightColor="#444"
                    />
                ) : (
                    <>
                        <S.PlayerTrack__author>
                            <S.PlayerTrack__author__link>
                                {currentTrack!.author}
                            </S.PlayerTrack__author__link>
                        </S.PlayerTrack__author>
                        <S.PlayerTrack__album>
                            <S.PlayerTrack__album__link href="http://">
                                {currentTrack!.name}
                            </S.PlayerTrack__album__link>
                        </S.PlayerTrack__album>
                    </>
                )}
            </S.PlayerTrack__contain>

            <S.PlayerTrack__likeDislike>
                <S.PlayerTrack__likeDislike_icon>
                    <S.PlayerTrack__likeSvg>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.PlayerTrack__likeSvg>
                </S.PlayerTrack__likeDislike_icon>
                <S.PlayerTrack__dislike>
                    <S.PlayerTrack__dislikeSvg className="track-play__dislike-svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.PlayerTrack__dislikeSvg>
                </S.PlayerTrack__dislike>
            </S.PlayerTrack__likeDislike>
        </S.PlayerTrack>
    );
};

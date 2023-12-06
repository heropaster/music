import * as S from "./styles.js";
import React, {useState} from "react";

interface ControlsProps {
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const Controls = React.forwardRef<HTMLAudioElement, ControlsProps>((props, ref) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isRepeating, setIsRepeating] = useState(false)
    const handlePlayPause = () => {

        if (isPlaying) {
            props.audioRef.current?.pause();

        } else {
            props.audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };
    const handleLooping = () => {
        props.audioRef.current!.loop = !props.audioRef.current!.loop
        setIsRepeating(!isRepeating)
    }
    return (
        <S.Controls>
            <S.Prev>
                <S.PrevSvg>
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PrevSvg>
            </S.Prev>
            <S.Play onClick={handlePlayPause}>
                <S.PlaySvg>
                    {isPlaying ? <use xlinkHref="img/icon/sprite.svg#stop"></use> :
                        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>}

                </S.PlaySvg>
            </S.Play>
            <S.Next>
                <S.NextSvg>
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.NextSvg>
            </S.Next>
            <S.Repeat onClick={handleLooping}>
                <S.RepeatSvg style={{stroke: isRepeating ? '#fff' : '#ccc'}}>
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.RepeatSvg>
            </S.Repeat>
            <S.Shuffle>
                <S.ShuffleSvg>
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.ShuffleSvg>
            </S.Shuffle>
        </S.Controls>
    );
})

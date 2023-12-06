import * as S from "./styles.js";
import React, {useState} from "react";

interface VolumeProps {
    audioRef: React.RefObject<HTMLAudioElement>
}

export const Volume = React.forwardRef<HTMLAudioElement, VolumeProps>((props, ref) => {
    const [volume, setVolume] = useState(props.audioRef?.current?.volume)
    const changeVolume = (value: string) => {
        setVolume(volume)
        props.audioRef.current.volume = +value / 100
    }
    return (
        <S.Volume>
            <S.Volume__content>
                <S.Volume__image>
                    <S.Volume__svg>
                        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </S.Volume__svg>
                </S.Volume__image>
                <S.Volume__progress>
                    <S.Progress__line onChange={(e) => changeVolume(e.target.value)} value={volume} type="range"
                                      name="range"/>
                </S.Volume__progress>
            </S.Volume__content>
        </S.Volume>
    );
})
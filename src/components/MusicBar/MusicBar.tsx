import React, {useEffect, useRef, useState} from "react";
import {Controls} from "./Controls/Controls";
import {CurrentTrack} from "./CurrentTrack/CurrentTrack";
import {Volume} from "./Volume/Volume";
import {useDataStore} from "../../store";
import * as S from "./styles.js";

const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${formattedSeconds}`;
};
export const MusicBar = () => {
    const [currentTrack] = useDataStore((set) => [set.currentTrack])
    const [timeInSeconds, setTimeInSeconds] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const [progress, setProgress] = useState(1);

    useEffect(() => {
        console.log(currentTrack)
        console.log(audioRef)
        const changeProgress = () => {
            const currentTime = audioRef.current!.currentTime
            setTimeInSeconds(currentTime)
            const duration = audioRef.current!.duration
            const currentProgress = currentTime / duration * 100
            setProgress(currentProgress)
        }
        audioRef.current?.addEventListener('timeupdate', changeProgress)
        return (() => audioRef.current?.removeEventListener('timeupdate', changeProgress))
    }, [currentTrack])

    const onSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        const seekPosition = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * 100;
        const duration = audioRef.current!.duration
        const seekTime = (seekPosition / 100) * duration;
        if (audioRef.current) audioRef.current.currentTime = seekTime;
    };

    return (
        currentTrack &&
        <>
            {/*// @ts-ignore*/}
            <audio src={currentTrack.track_file} onChange={(v) => setProgress(v)} autoPlay={true} ref={audioRef}
                   loop={false}/>

            <S.Bar>
                <S.Bar__content>
                    <S.TimeDisplay>
                        {audioRef.current?.duration ? (<>{formatTime(timeInSeconds)} / {formatTime(audioRef.current?.duration)}</>) : null}
                    </S.TimeDisplay>
                    <S.Bar__progress onClick={onSeek}>
                        <S.Progress_thumb style={{width: `${progress}%`}}/>
                    </S.Bar__progress>
                    <S.Bar__playerContainer>
                        <S.Bar__player>
                            <Controls audioRef={audioRef}/>
                            <CurrentTrack currentTrack={currentTrack}/>
                        </S.Bar__player>
                        <Volume audioRef={audioRef}/>
                    </S.Bar__playerContainer>
                </S.Bar__content>
            </S.Bar>
        </>
    );
};

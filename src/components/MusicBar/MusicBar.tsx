import {Controls} from "./Controls/Controls";
import {CurrentTrack} from "./CurrentTrack/CurrentTrack";
import {Volume} from "./Volume/Volume";
import * as S from "./styles.js";
import {useDataStore} from "../../store";

export const MusicBar = () => {
    const [currentTrack] = useDataStore((set) => [set.currentTrack])
    console.log(currentTrack)
    return (
        currentTrack && <S.Bar>
            <S.Bar__content>
                <S.Bar__progress/>
                <S.Bar__playerContainer>
                    <S.Bar__player>
                        <Controls/>
                        <CurrentTrack currentTrack={currentTrack}/>
                    </S.Bar__player>
                    <Volume/>
                </S.Bar__playerContainer>
            </S.Bar__content>
        </S.Bar>

    );
};

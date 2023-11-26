import {MusicBar} from "../../components/MusicBar/MusicBar";
import {Header} from "../../components/Header/Header";
import {Playlist} from "../../components/Playlist/Playlist";

import * as S from './styles.js'

export const Favorites = () => {
    return <>
        <Header/>
        <S.FavoritesContainer>
            <S.FavoritesTitle>Мои треки</S.FavoritesTitle>
            <Playlist type={'small'}/>
        </S.FavoritesContainer>
        <MusicBar/>
    </>
}
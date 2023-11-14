import React from "react";
import {useParams} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {MusicBar} from "../../components/MusicBar/MusicBar";
import {Playlist} from "../../components/Playlist/Playlist";
import * as S from './styles.js'

export const Category = () => {
    const titles = ['Плейлист дня', "100 танцевальных хитов", "Инди заряд"]
    const params = useParams();
    console.log(params)
    return (
        <>
            <Header/>
            <S.CategoryContainer>
                <S.CategoryTitle>{titles[0]}</S.CategoryTitle>
                <Playlist type={'small'}/>
            </S.CategoryContainer>
            <MusicBar/>
        </>
    )
}
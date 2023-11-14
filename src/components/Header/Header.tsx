import React from 'react'
import * as S from './styles.js'
import {Nav} from "../Nav/Nav";
import {Search} from "../CenterBlock/Search/Search";
import {useNavigate} from "react-router-dom";

export const Header: React.FC = () => {
    const history = useNavigate()
    const handleLogout = () => {
        localStorage.clear();
        history('/login')
    }
    return (
        <S.HeaderContainer>
            <Nav/>
            <Search/>
            <S.Personal>
                <S.PersonalName>Sergey.Ivanov</S.PersonalName>
                <S.PersonalIcon onClick={handleLogout}>
                    <svg>
                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                </S.PersonalIcon>
            </S.Personal>
        </S.HeaderContainer>
    )
}
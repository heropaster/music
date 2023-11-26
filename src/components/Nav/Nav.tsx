import React, {useState} from "react";
// @ts-ignore
import * as S from "./styles.ts";
// @ts-ignore
import {Logo} from "../Logo/Logo";


export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <S.Nav>
            <Logo type={'main'}/>
            <S.Burger className={`${isOpen ? "active" : ""}`} onClick={handleClick}>
                <S.Line__first $active={`${isOpen ? "active" : ""}`}></S.Line__first>
                <S.Line__second $active={`${isOpen ? "active" : ""}`}></S.Line__second>
                <S.Line__third $active={`${isOpen ? "active" : ""}`}></S.Line__third>
            </S.Burger>
            <S.Menu>
                <S.Menu__list className={`${isOpen ? "opened" : ""}`}>
                    <S.Menu__item>
                        <S.Menu__link to={'/'}>Главное</S.Menu__link>
                    </S.Menu__item>
                    <S.Menu__item>
                        <S.Menu__link to={'/playlist'}>Мой плейлист</S.Menu__link>
                    </S.Menu__item>
                    <S.Menu__item>
                        <S.Menu__link to={'./login'}>Войти</S.Menu__link>
                    </S.Menu__item>
                </S.Menu__list>
            </S.Menu>
        </S.Nav>
    );
};

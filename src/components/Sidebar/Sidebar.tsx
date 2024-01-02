import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {useNavigate} from "react-router-dom";
import {useDataStore} from "../../store";
import * as S from "./styles.js";

export const Sidebar = () => {
    const history = useNavigate()
    const [isPending] = useDataStore((set) => [set.isPending])

    const handleRedirect = (id: string) => {
        history(`/category/${id}`)
    }
    const handleLogout = () => {
        localStorage.clear();
        history('/login')
    }
    return (
        <S.Sidebar>
            <S.Personal>
                <S.PersonalName>Sergey.Ivanov</S.PersonalName>
                <S.SidebarIcon onClick={handleLogout}>
                    <svg>
                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                </S.SidebarIcon>
            </S.Personal>
            <S.SidebarBlock>
                <S.List>
                    <S.ListItem>
                        {isPending ? (
                            <Skeleton
                                width="250px"
                                height="150px"
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.SidebarLink onClick={() => handleRedirect('1')}>
                                <S.SidebarImg
                                    src="../img/playlist01.png"
                                    alt="day's playlist"
                                />
                            </S.SidebarLink>
                        )}
                    </S.ListItem>
                    <S.ListItem>
                        {isPending ? (
                            <Skeleton
                                width="250px"
                                height="150px"
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.SidebarLink onClick={() => handleRedirect('2')}>
                                <S.SidebarImg
                                    src="../img/playlist02.png"
                                    alt="day's playlist"
                                />
                            </S.SidebarLink>
                        )}
                    </S.ListItem>
                    <S.ListItem>
                        {isPending ? (
                            <Skeleton
                                width="250px"
                                height="150px"
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.SidebarLink onClick={() => handleRedirect('3')}>
                                <S.SidebarImg
                                    src="../img/playlist03.png"
                                    alt="day's playlist"
                                />
                            </S.SidebarLink>
                        )}
                    </S.ListItem>
                </S.List>
            </S.SidebarBlock>
        </S.Sidebar>
    );
};

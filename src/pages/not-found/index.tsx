import {useNavigate} from "react-router-dom";
import {Button} from "../../UI/Button/Button";
import * as S from './styles.js'
import {Nav} from "../../components/Nav/Nav";
import {Search} from "../../components/CenterBlock/Search/Search";
import {Header} from "../../components/Header/Header";
import {MusicBar} from "../../components/MusicBar/MusicBar";

export const NotFound = () => {
    const history = useNavigate()
    const handleRedirect = () => {
        history('/')
    }
    return (
        <>
            <Header/>
            <S.Wrapper>
                <S.Title>404</S.Title>
                <S.Subtitle>Страница не найдена <img src={'img/icon/smile_crying.png'}/> </S.Subtitle>
                <S.Description>Возможно, она была удалена <br/>
                    или перенесена на другой адрес</S.Description>
                <Button callback={handleRedirect} type={'primary'}>На главную</Button>
            </S.Wrapper>
            <MusicBar/>
        </>
    );
};

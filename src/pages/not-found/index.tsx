import {useNavigate} from "react-router-dom";
import {Button} from "../../UI/Button/Button";
import * as S from './styles.js'

export const NotFound = () => {
    const history = useNavigate()
    const handleRedirect = () => {

    }
    return (
        <S.Wrapper>
            <S.Title>404</S.Title>
            <S.Subtitle>Страница не найдена </S.Subtitle>
            <Button callback={handleRedirect} type={'primary'}>На главную</Button>
        </S.Wrapper>
    );
};

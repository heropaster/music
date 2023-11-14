import React, {useState} from 'react'
import {Logo} from '../Logo/Logo'
import * as S from './styles.js'
import {InputText} from "../../UI/InputText/InputText";
import {Button} from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";

interface AuthorizationProps {
    type: string
}

type User = {
    mail: string,
    pass: string
}
export const Authorization: React.FC<AuthorizationProps> = ({type}) => {
    const history = useNavigate();
    const [user, setUser] = useState<User>({mail: '', pass: ''});
    const [confirmPass, setConfirmPass] = useState('')

    const handleChangeMail = (value: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            mail: value,
        }));
    }
    const handleChangePass = (value: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            pass: value,
        }));
    }
    const handleChangeConfirmPass = (value: string) => {
        setConfirmPass(value)
    }
    const handleConfirm = () => {
        if (user.mail === '' || user.pass === '') {
            alert('Введите данные')
        } else if (type === 'register') {
            if (confirmPass !== user.pass) {
                alert('Пароли не совпадают')
            } else {
                localStorage.setItem('user', JSON.stringify(user))
                history('/')
            }
        } else {
            localStorage.setItem('user', JSON.stringify(user))
            history('/')
        }
    }
    return <S.Wrapper>
        <S.Container>
            <Logo type={'modal'}/>
            <InputText type={'email'} placeholder={"Почта"} value={user.mail} callback={handleChangeMail}/>
            <InputText type={'password'} placeholder={'Пароль'} value={user.pass} callback={handleChangePass}/>
            {type === 'register' &&
                <InputText type={'password'} value={confirmPass} placeholder={'Повторите пароль'}
                           callback={handleChangeConfirmPass}/>}
            <S.Buttons>
                {type === 'register' ?
                    <Button callback={handleConfirm} type={'primary'}>Зарегистрироваться</Button> :
                    (<>
                        <Button
                            callback={handleConfirm}
                            type={'primary'}>Войти</Button>
                        <Button callback={() => history('/register')}>Зарегистрироваться</Button>
                    </>)}

            </S.Buttons>
        </S.Container>
    </S.Wrapper>
}
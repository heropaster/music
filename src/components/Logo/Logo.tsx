import React from "react";
import * as S from './styles.js'

interface LogoProps {
    type: string
}

export const Logo: React.FC<LogoProps> = ({type}) => {
    return <S.LogoContainer>
        {type === 'modal' ? <S.LogoImage src="img/logo_modal.png" alt="logo"/> :
            <S.LogoImage src="img/logo.png" alt="logo"/>}
    </S.LogoContainer>
}
import React, {ReactNode} from 'react'

// @ts-ignore
import * as S from './styles.ts'

interface ButtonProps {
    type?: string;
    children: ReactNode,
    callback: () => void
}

export const Button: React.FC<ButtonProps> = ({children, type, callback}) => {
    return <S.StyledButton className={type === 'primary' && 'primary'} onClick={callback}>
        {children}
    </S.StyledButton>
}
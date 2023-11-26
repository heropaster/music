import React from 'react'

import * as S from './styles.js'

interface InputTextProps {
    type: string,
    placeholder: string,
    callback: (v: string) => void,
    value: string
}

export const InputText: React.FC<InputTextProps> = ({placeholder, callback, value, type}) => {
    return <S.Input type={type} placeholder={placeholder} onChange={(e) => callback(e.target.value)} value={value}/>
}
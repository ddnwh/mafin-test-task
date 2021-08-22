import React from "react";
import {PropsType} from './types';
import {CharacterInfoWrapperStyled} from './styles';

export const CharacterInfo:React.FC<PropsType> = (props) => {
    const {character} = props;
    return <CharacterInfoWrapperStyled>
        <div>Name: {character.name}</div>
        <div>Status: {character.status}</div>
        <div>Species: {character.species}</div>
    </CharacterInfoWrapperStyled>
}
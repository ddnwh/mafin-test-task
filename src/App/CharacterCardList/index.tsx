import React from "react";
import {PropsType} from './types';
import {CharacterCard} from './CharacterCard';
import {CharacterCardListWrapperStyled} from './styles';
 
export const CharacterCardList:React.FC<PropsType> = (props) => {
    const {characterList} = props;
    return <CharacterCardListWrapperStyled>{
        characterList.map(character=><CharacterCard character={character} key={character.id}/>)
    }</CharacterCardListWrapperStyled>
}
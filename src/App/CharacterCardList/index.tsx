import React from "react";
import {PropsType} from './types';
import {CharacterCard} from './CharacterCard'
 
export const CharacterCardList:React.FC<PropsType> = (props) => {
    const {characterList} = props;
    return <>{
        characterList.map(character=><CharacterCard character={character}/>)
    }</>
}
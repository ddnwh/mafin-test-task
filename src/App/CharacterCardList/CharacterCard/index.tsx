import React, {useState, useCallback} from "react";
import {PropsType} from './types'
import {CharacterCardStyled} from './styles';
import {CharacterInfo} from './CharacterInfo';

export const CharacterCard:React.FC<PropsType> = (props) => {
    const [isInfoDisplayed,setInfoDisplayed] = useState(false);

    const handleOnMouseEnter = useCallback(() => {
        setInfoDisplayed(true);
    },[]);

    const handleOnMouseLeave = useCallback(() => {
        setInfoDisplayed(false);
    },[]);

    const {character} = props;

    return <CharacterCardStyled onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <img src={character.image} />
      {isInfoDisplayed && <CharacterInfo character={character} />}
    </CharacterCardStyled>
}
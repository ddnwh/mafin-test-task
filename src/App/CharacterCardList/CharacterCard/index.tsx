import React from "react";
import {PropsType} from './types'

export const CharacterCard:React.FC<PropsType> = (props) => {
    const {character} = props;
    return <div>
        {character.name}
    </div>
}
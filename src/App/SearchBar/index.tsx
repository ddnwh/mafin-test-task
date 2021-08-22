import React, {useState} from "react";
import {PropsType} from './types'

export const SearchBar:React.FC<PropsType> = (props) => {
    const [searchString,setSearchString] = useState('');

    const {handleSearch} = props;

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSearchString(value);
        handleSearch(value);
    }
    
    return <input type="text" onChange={handleInputChange} value={searchString}/>
}
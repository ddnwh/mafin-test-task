import React, {useState} from "react";
import {PropsType} from './types';
import {SearchInputStyled} from './styles';

export const SearchBar:React.FC<PropsType> = (props) => {
    const [searchString,setSearchString] = useState('');

    const {handleSearch} = props;

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchString(value);
        handleSearch(value);
    }
    
    return <SearchInputStyled type="text" onChange={handleInputChange} value={searchString}/>
}
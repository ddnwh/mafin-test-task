import React, {useState, useCallback} from "react";
import {PropsType} from './types';
import {SearchInputStyled} from './styles';

export const SearchBar:React.FC<PropsType> = (props) => {
    const [searchString,setSearchString] = useState('');

    const {handleSearch} = props;

    const handleInputChange = useCallback((event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchString(value);
        handleSearch(value);
    },[handleSearch])
    
    return <SearchInputStyled type="text" onChange={handleInputChange} value={searchString}/>
}
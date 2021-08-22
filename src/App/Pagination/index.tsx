import React from "react";
import {PropsType} from './types'

export const Pagination: React.FC<PropsType> = (props) => {
    const {currentPage, totalPages, changePage} = props;
    const handleLeft = () => changePage(currentPage!==1?currentPage-1:1);
    const handleRight = () => changePage(currentPage!==totalPages?currentPage+1:totalPages);
    return <div>
        <button onClick={handleLeft}>left</button>
        <button onClick={handleRight}>right</button>
    </div>
}
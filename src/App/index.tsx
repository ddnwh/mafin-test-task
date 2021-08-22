import React, {useEffect, useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {fetchData} from './../state/actions';
import {StateType} from './../state/types'
import {PropsType} from './types'
import {SearchBar} from './SearchBar';
import {CharacterCardList} from './CharacterCardList';
import {Pagination} from './Pagination'

const App: React.FC<PropsType> = (props) => {  
  const dispatch = useDispatch();
  const [page,setPage] = useState(1);

  useEffect(()=>{
    dispatch(fetchData(page));
  },[])

  const {info,results} = props;

  const handleSearh = (searchBy: string) => {
    dispatch(fetchData(page,searchBy));
  }

  const handleChangePage = (page: number) => {
    setPage(page);
    dispatch(fetchData(page));
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearh}/>
      <CharacterCardList characterList={results}/>
      <Pagination currentPage={page} totalPages={info.pages} changePage={handleChangePage}/>
    </div>
  )
}

const mapStateToProps = (state:StateType) => {
  return state
 }

export default connect(mapStateToProps)(App)

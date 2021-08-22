import React, {ChangeEvent, useEffect, useState, useCallback} from 'react';
import {useDispatch, connect} from 'react-redux';
import {fetchData} from './../state/actions';
import {StateType} from './../state/types'
import {PropsType} from './types'
import {SearchBar} from './SearchBar';
import {CharacterCardList} from './CharacterCardList';
import {Pagination} from '@material-ui/lab';
import {AppWrapperStyled} from './styles';
import debounce from 'lodash/debounce';

const START_PAGE = 1;
const IGNORE_FIRST_SYMBOLS_COUNT = 1;

const App: React.FC<PropsType> = (props) => {  
  const dispatch = useDispatch();
  const [page,setPage] = useState(START_PAGE);

  useEffect(()=>{
    dispatch(fetchData(page));
  },[])

  const {info,results} = props;

  const handleSearh = useCallback((searchBy: string) => {
    if(searchBy.length>IGNORE_FIRST_SYMBOLS_COUNT || searchBy.length===0){
      dispatch(fetchData(START_PAGE,searchBy))
    }
    setPage(START_PAGE);
  },[dispatch,page]);

  const debouncedHandleSearch = debounce(handleSearh,500);

  const handleChangePage = useCallback((event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    dispatch(fetchData(page));
  },[dispatch]);

  return (
    <AppWrapperStyled>
      <SearchBar handleSearch={debouncedHandleSearch}/>
      <CharacterCardList characterList={results}/>
      <Pagination page={page} count={info.pages} onChange={handleChangePage}/>
    </AppWrapperStyled>
  )
}

const mapStateToProps = (state:StateType):StateType => {
  return state
 }

export default connect(mapStateToProps)(App)

import React, { useState, useEffect, useMemo } from "react";
import FilmList from "../components/FilmList";
import FilmFilter from "../components/FilmFilter";
import { useFilms } from "../hooks/useFilms";
import { useFetching } from "../hooks/useFetching";
import FilmService from "../API/FilmService";
import {getPageCount} from "../utils/pages";
import  "../styles/App.css";
import Pagination from "../components/pagination/Pagination";
import FilmSelectLimit from "../components/UI/select/FilmSelectLimit";

function Films() {

  const [films, setFilms] = useState([{}]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] =useState(10);
  const [page, setPage] =useState(1);

  const [fetchFilms, isFilmsLoading, filmError] = useFetching( async (limit, page)=>{
    const response = await FilmService.getAll(limit, page);
    setFilms(response.docs);
    const totalCount = process.env.REACT_APP_TOTAL_COUNT;
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchFilms(limit, page);
  }, [limit])

  const changePage = (page) =>{
      setPage(page);
      fetchFilms(limit, page);
  }

  const [filter, setFilter] = useState({sort:'', search:''});
  const sortedAndSearchedFilms = useFilms(films, filter.sort, filter.search);

  return(

    <div className="App" style={{margin:"0 5px"}}>

      <FilmFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      <FilmSelectLimit 
        value={limit}
        onChange={ value => setLimit(value)} 
        defaultOption="..."
        options={[
            {value: 4, name: "4"},
            {value: 6, name: "6"},
            {value: 10, name: "10"},
            {value: 30, name: "30"},
            {value: 60, name: "60"},
            {value: 120, name: "120"},
            {value: 250, name: "250"}
        ]}
      />
      {filmError &&
        <h1>Ошибка {filmError} </h1>}

      {isFilmsLoading
      ? <h1 style={{textAlign:"center"}}>Загружаем</h1>
      :<FilmList films={sortedAndSearchedFilms}/>   
      }
      <Pagination 
          page={page} 
          changePage={changePage} 
          totalPages={totalPages}
      />

    </div>

  );
}

export default Films;
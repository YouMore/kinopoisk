import {useMemo} from "react";

export const useSortedFilms = (films, sort) => {
  const sortedFilms = useMemo(()=>{
      if(sort){
        return [...films].sort((a,b) => 
                  (typeof a[sort] ==='string') 
                    ? a[sort].localeCompare(b[sort]) 
                    : a[sort]-b[sort])
      }
      return films;
    }, [sort, films]);

  return sortedFilms;
}

export const useFilms = (films, sort, search) => {
  const sortedFilms = useSortedFilms(films, sort);

  const sortedAndSearchedFilms = useMemo(()=>{
      return sortedFilms.filter(film => film.name && typeof film.name === 'string' && film.name.toLowerCase().includes(search.toLowerCase()));
  },[search, sortedFilms]);

  return sortedAndSearchedFilms;
}
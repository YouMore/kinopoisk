import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import FilmService from "../API/FilmService";
import Poster from "../components/poster/Poster";
import FilmInfo from "../components/filmInfo/FilmInfo";
import ActorList from "../components/actorList/ActorList";
import SameFilmsCarusel from "../components/sameFilmsCarusel/SameFilmsCarusel";
import FilmButton from "../components/UI/button/FilmButton";
import SeasonsList from "../components/seasonsList/SeasonList";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

function FilmIdPage (){
    const params = useParams();
    const [film, setFilm] = useState({});
    const [comment, setComment] = useState([]);
    const [pageComments, setPageComments] = useState(1);
    const [posterImages, setPosterImages] = useState([]);

    const [fetchFilmById, isLoading, error] = useFetching( async (id)=>{
      const response = await FilmService.getById(params.id);
      const responsePosterImages = await FilmService.getPosterImagesByFilmId(params.id);
      setFilm(response);
      setPosterImages(responsePosterImages.docs);
    });

    const [fetchPosterImages, isPosterLoading, errorPoster] = useFetching( async (id)=>{
      const responsePosterImages = await FilmService.getPosterImagesByFilmId(params.id);
      setPosterImages(responsePosterImages.docs);
    });

    const [totalCountComments, setTotalCountComments]= useState(0);

    const [fetchComments, isCommentsLoading, comError] = useFetching( async (pageComments, id)=>{
      const response = await FilmService.getReviewByFilmId(pageComments, params.id);
      setComment(response.docs);
      setTotalCountComments(response.total);  
    });

    useEffect(()=>{
      fetchFilmById(params.id);
      fetchPosterImages(params.id);
    }, [params.id]);

    useEffect(()=>{
      fetchComments(pageComments, params.id);
    }, [pageComments, params.id]);

    return(
      <div>
          {error &&
              <h1>Ошибка {error} </h1>
          }
          {isLoading
            ? <h1 style={{textAlign:"center"}}>Загружаем</h1>
            : <div>
                <Poster posters={posterImages}/>
                
                <FilmInfo name={film.name} description={film.description} rating={film.rating?.kp}/>
                <ActorList actors={film.persons}/>
                <SeasonsList seasonsInfo={film.seasonsInfo} isSeries={film.isSeries}/>

                <div style={{padding:"5px"}}>
                  <h1>Комментарии</h1>
                  {isCommentsLoading
                    ? <h1 style={{textAlign:"center"}}>Загружаем</h1>
                    : <div style={{width:"60%", border: '1px solid red', borderRadius: '8px', padding: '20px', marginBottom:'5px'}}>
                        {comment.map((commentItem, index) => (
                          <div key={index}>
                            <h3>{commentItem.author}</h3>
                            <p>{commentItem.review}</p>
                          </div>
                        ))}
                        <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                          <FilmButton onClick={()=>setPageComments(pageComments-1)} disabled={pageComments === 1} style={{marginRight:"10px"}}>
                            Пред
                          </FilmButton>
                          <div className="descriptionPag">{`${pageComments} из ${totalCountComments}`}
                          </div>
                          <FilmButton onClick={() => setPageComments(pageComments+1)} disabled={pageComments === totalCountComments} style={{marginLeft:"10px"}}> 
                            След 
                          </FilmButton>
                        </div>
                      </div> 
                  }
                </div>

                <SameFilmsCarusel movies={film.similarMovies}/>
              </div>
          }
      </div>
    );
}

export default FilmIdPage;
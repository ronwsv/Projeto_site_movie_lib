import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs"

import "./Movie.css"

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const formatCurrency = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }

  const getMovie = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR&append_to_response=videos,images,credits`
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTRjOGRmYWUwMWJkNGFlOWE5YjdlOWZhZDE5OWEyMCIsIm5iZiI6MTczMjY0MTE5MC45OTE1MTIzLCJzdWIiOiI2NzQ1Y2VhNDQxNDMzNDI4ZDkyZWMzMzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C74DwFoZu9Hl4t6ah9sSw052ORPPLP8XjTAPyydSuUA'
        }
      }

      const response = await fetch(url, options)
      const data = await response.json()
      console.log("Dados do filme:", data)
      setMovie(data)
    } catch (error) {
      console.error("Erro ao buscar filme:", error)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div className="movie-page">
      {movie && (
        <>
          <div className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            {movie.tagline && <p className="tagline">"{movie.tagline}"</p>}
          </div>

          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p><span>{formatCurrency(movie.budget)}</span></p>
          </div>

          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p><span>{formatCurrency(movie.revenue)}</span></p>
          </div>

          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p><span>{movie.runtime}</span> minutos</p>
          </div>

          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>

          {movie.videos && movie.videos.results.length > 0 && (
            <div className="info">
              <h3>Trailer:</h3>
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                  title="Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {movie.credits && movie.credits.cast.length > 0 && (
            <div className="info">
              <h3>Elenco Principal:</h3>
              <div className="cast-list">
                {movie.credits.cast.slice(0, 6).map((actor) => (
                  <p key={actor.id}>
                    <span>{actor.name}</span> como {actor.character}
                  </p>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Movie
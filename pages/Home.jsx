import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import "./MoviesGrid.css"

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async () => {
    try {
      const url = "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1"
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTRjOGRmYWUwMWJkNGFlOWE5YjdlOWZhZDE5OWEyMCIsIm5iZiI6MTczMjY0MTE5MC45OTE1MTIzLCJzdWIiOiI2NzQ1Y2VhNDQxNDMzNDI4ZDkyZWMzMzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C74DwFoZu9Hl4t6ah9sSw052ORPPLP8XjTAPyydSuUA'
        }
      }

      const response = await fetch(url, options)
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }
      
      const data = await response.json()
      console.log("Filmes recebidos:", data.results)
      setTopMovies(data.results)
      
    } catch (error) {
      console.error("Erro ao buscar filmes:", error)
    }
  }

  useEffect(() => {
    getTopRatedMovies()
  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && 
          topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default Home
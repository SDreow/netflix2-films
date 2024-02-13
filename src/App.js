import { useState } from "react"
import allMovies from "./data"
import categories from "./categories"

const App = () => {
  const {typeOfMovie, setTypeOfMovie} = useState("komedie")

  const resultFilms = allMovies.filter( (oneMovie) => {
      return oneMovie["category"] === typeOfMovie
  } )

  return<>
    
  </>
}

export default App
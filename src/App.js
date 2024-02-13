import { useState } from "react"
import allMovies from "./data"
import categories from "./categories"

const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("komedie")

  const resultFilms = allMovies.filter( (oneMovie) => {
      return oneMovie["category"] === typeOfMovie
  } )

  return<div>
    <div>
      {
        categories.map( (oneCategory, index) => {
          return <button key={index} onClick={() => setTypeOfMovie(oneCategory)}>
                    {oneCategory}
                  </button>
        })
      }
    </div>
    <div>
      {
        resultFilms.map( (oneMovie) => {
          const {id, image, title, age, tags, description} = oneMovie

          return <div key={id}>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
          </div>
        })
      }
    </div>  
  </div>
}

export default App
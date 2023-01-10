import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { AddMovie } from "./AddMovie";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://639236eeb750c8d178d9c9f3.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  // After APP Compnent mounted
  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    // Delete -> Referesh the data
    fetch(`https://639236eeb750c8d178d9c9f3.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then((data) => getMovies());
  };
  return (
    <div>
      <div className="movie-list">
        {/* Parent(Movie) -> Child(movie) = {props}(mvl) */}
        {movieList.map((mv) => {
          return (
            <div key={mv.id}>
              <Movie
                movie={mv}
                id={mv.id}
                deleteButton={
                  <IconButton
                    style={{ marginLeft: "auto" }}
                    onClick={() => deleteMovie(mv.id)}
                    aria-label="delete"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// deleteButton={
//   <IconButton
//   sx={{}} onclick={() => deleteMovie(mv.id)}>
//   <DeleteIcon />
// </IconButton>
// }
import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { AddMovie } from "./AddMovie";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  // After APP Compnent mounted
  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    // Delete -> Referesh the data
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then((data) => getMovies());
  };

  const navigate = useNavigate();
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
                    sx={{ marginLeft: "auto" }}
                    onClick={() => deleteMovie(mv.id)}
                    aria-label="delete"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                editButton={
                  <IconButton
                    sx={{ marginLeft: "auto" }}
                    onClick={() => navigate(`/movies/edit/${mv.id}`)}
                    aria-label="edit"
                    color="secondary"
                  >
                    <EditIcon />
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

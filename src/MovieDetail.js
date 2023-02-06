import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
import { API } from "./global";

export function MovieDetail() {
  const { id } = useParams();
  // const movie = MovieList[id];

  const [movie, setMovie] = useState([]);

  // After APP Compnent mounted
  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  console.log(movie);

  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="800px"
        src={movie.trailer}
        title="Thee Thalapathy | Thalapathy Vijay | Varisu | STR | Vamshi Paidipally | Thaman"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-container">
        <div className="movie-specs">
          <h1 className="movie-name">{movie.name}</h1>

          <h3 style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </h3>
        </div>
        <p classsname="movie-summary">{movie.summary}</p>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => navigate(-1)}
          variant="contained"
        >
          BACK
        </Button>
      </div>
    </div>
  );
}

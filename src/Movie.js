import { Counter } from "./Counter";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export function Movie({ movie, id, deleteButton }) {
  //conditional styling
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <img src={movie.poster} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h1 className="movie-name">
            {movie.name}
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary  "
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              color="primary"
              // /movies/1
              onClick={() => navigate(`/movies/${id}`)}
              aria-label="Toggle summary  "
            >
              <InfoIcon />
            </IconButton>{" "}
          </h1>

          <h3 style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </h3>
        </div>

        {/* conditional rendering */}

        {show ? <p classsname="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        {/* render props pattern */}
        <Counter /> {deleteButton}
      </CardActions>
    </Card>
  );
}

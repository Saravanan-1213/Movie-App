import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().min(4),
  rating: yup.number().required().min(0).max(10),
  summary: yup.string().required().min(20),
  trailer: yup.string().required().min(4).url(),
});

export function AddMovie({ movieList, setMovieList }) {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  // formick used in add movie
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMoive) => {
      console.log("Form values:", newMoive);
      addMovie(newMoive);
    },
  });

  const navigate = useNavigate();

  const addMovie = (newMoive) => {
    // strps for put method
    // 1 metgod POST
    // 2 body -> data (data format should be Json)
    // 3 should mention in header in Json
    fetch("https://639236eeb750c8d178d9c9f3.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMoive),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/movies"));
  };

  return (
    <form className="add-movie-form" onSubmit={formik.handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        value={formik.values.name}
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : null}
      <TextField
        label="Poster"
        variant="outlined"
        value={formik.values.poster}
        name="poster"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : null}
      <TextField
        label="Rating"
        variant="outlined"
        value={formik.values.rating}
        name="rating"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : null}
      <TextField
        label="Summary"
        variant="outlined"
        value={formik.values.summary}
        name="summary"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : null}
      <TextField
        label="Trailer"
        variant="outlined"
        value={formik.values.trailer}
        name="trailer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : null}
      {/* Copy a Existing MovieList and add a new Movie on it */}

      <Button type="submit" variant="contained">
        Add Movie
      </Button>
    </form>
  );
}

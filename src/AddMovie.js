import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { API } from "./global";

const movieValidationSchema = yup.object({
  name: yup.string().required("Valid Name is need😑"),
  poster: yup
    .string()
    .required("Valid Poster is need😑")
    .min(4, "Need a Poster link"),
  rating: yup
    .number()
    .required("Valid rating is need😑")
    .min(0, "Need a Rating")
    .max(10),
  summary: yup
    .string()
    .required("Valid Summary is need😑")
    .min(20, "Need a Summary"),
  trailer: yup
    .string()
    .required("Valid Trailer is need😑")
    .min(4, "Need a Trailer link")
    .url(),
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
    fetch(`${API}/movies`, {
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
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : null
        }
      />

      <TextField
        label="Poster"
        variant="outlined"
        value={formik.values.poster}
        name="poster"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : null
        }
      />

      <TextField
        label="Rating"
        variant="outlined"
        value={formik.values.rating}
        name="rating"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : null
        }
      />

      <TextField
        label="Summary"
        variant="outlined"
        value={formik.values.summary}
        name="summary"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : null
        }
      />

      <TextField
        label="Trailer"
        variant="outlined"
        value={formik.values.trailer}
        name="trailer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : null
        }
      />

      {/* Copy a Existing MovieList and add a new Movie on it */}

      <Button type="submit" variant="contained">
        Add Movie
      </Button>
    </form>
  );
}

import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { useEffect, useState } from "react";
import { AddMovie } from "./AddMovie";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { MovieDetail } from "./MovieDetail";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { BasicForm } from "./BasicForm";
import { EditMovie } from "./EditMovie";

function App() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0px" }} elevation={5}>
        <div className="App">
          {/* <MovieList /> */}
          {/* <AddColor /> */}

          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>

              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>

              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movie
              </Button>

              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color Game
              </Button>

              <Button
                sx={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"}mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            {/* Redirect form movies -> films */}

            <Route path="/films" element={<Navigate replace to="/movies" />} />

            <Route path="/movies" element={<MovieList />} />

            <Route path="/color-game" element={<AddColor />} />

            <Route
              path="/movies/add"
              element={
                <AddMovie movieList={movieList} setMovieList={setMovieList} />
              }
            />
            {/* : -> it denotes variable( matches any index numbers of movie i.e 1-id (:id) */}
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/basic-form" element={<BasicForm />} />
            <Route path="*" element={<NotFound />} />

            {/* <Route path="about" element={<About />} /> */}
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
export default App;

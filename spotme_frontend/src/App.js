// Import dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

// Import Components, styles, media
import "./App.css";

// Import Pages
import HomePage from "./pages/HomePage";
import AddExercisePage from "./pages/AddExercisePage";
import EditExercisePage from "./pages/EditExercisePage";

// Define the function that renders the content in routes using State.
function App() {
  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>
        <div class="container">
          <header>
            <div>
              <div>
                <h1>SpotMe</h1>
                <p>Exercise tracking made easy</p>
              </div>
            </div>
          </header>

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/add-exercise">
              <AddExercisePage />
            </Route>

            <Route path="/edit-exercise">
              <EditExercisePage exercise={exercise} />
            </Route>
          </main>
          <div class="space"></div>

          <footer>
            <p>&copy; 2022 Ken Steckler</p>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;

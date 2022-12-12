import "dotenv/config";
import express from "express";
import * as exercises from "./exercises-model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// CREATE controller ******************************************
app.post("/exercises", (req, res) => {
  exercises
    .createExercise(
      req.body.name,
      req.body.reps,
      req.body.weight,
      req.body.unit,
      req.body.date
    )
    .then((exercise) => {
      res.status(201).json(exercise);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        error: "Creation of an exercise failed due to invalid syntax.",
      });
    });
});

// RETRIEVE controller ****************************************************
// GET exercises by ID
app.get("/exercises/:_id", (req, res) => {
  const exerciseId = req.params._id;
  exercises
    .findExerciseById(exerciseId)
    .then((exercise) => {
      if (exercise !== null) {
        res.json(exercise);
      } else {
        res.status(404).json({ Error: "Excercise not found" });
      }
    })
    .catch((error) => {
      res.status(400).json({ Error: "Request to retrieve exercise failed" });
    });
});

// GET exercises filtered by date or name
app.get("/exercises", (req, res) => {
  let filter = {};
  // filter by year
  if (req.query.date !== undefined) {
    filter = { date: req.query.date };
  }
  // filter by language
  if (req.query.name !== undefined) {
    filter = { name: req.query.name };
  }
  exercises
    .findExercises(filter, "", 0)
    .then((exercises) => {
      res.send(exercises);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Request to retrieve exercise failed" });
    });
});

// DELETE Controller ******************************
app.delete("/exercises/:_id", (req, res) => {
  exercises
    .deleteById(req.params._id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        res.status(204).send();
      } else {
        res.status(404).json({ Error: "Exercise not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.send({ error: "Request to delete an exercise failed" });
    });
});

// UPDATE controller ************************************
app.put("/exercises/:_id", (req, res) => {
  exercises
    .replaceExercise(
      req.params._id,
      req.body.name,
      req.body.reps,
      req.body.weight,
      req.body.unit,
      req.body.date
    )

    .then((numUpdated) => {
      if (numUpdated === 1) {
        res.json({
          _id: req.params._id,
          name: req.body.name,
          reps: req.body.reps,
          weight: req.body.weight,
          unit: req.body.unit,
          date: req.body.date,
        });
      } else {
        res.status(404).json({ Error: "Exercise not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ Error: "Request to update an exercise failed" });
    });
});

app.listen(PORT, () => {
  console.log(`Server making gains on port ${PORT}...`);
});

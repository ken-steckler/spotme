import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const EditExercisePage = ({ exercise }) => {
  const [name, setName] = useState(exercise.name);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);
  const [unit, setUnit] = useState(exercise.unit);
  const [date, setDate] = useState(
    exercise.date.toLocaleString("en-US").slice(0, 10)
  );

  const history = useHistory();

  const today = new Date();

  const editExercise = async () => {
    const response = await fetch(`/exercises/${exercise._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Successfully edited document!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update document. Status ${response.status}. ${errMessage.Error}`
      );
    }
    history.push("/");
  };

  const backHome = () => {
    history.push("/");
  };

  return (
    <>
      <article>
        <h2>Edit an Exercise</h2>
        <p>Make edits to your exercise.</p>
        <form
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label for="name"></label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />

          <label for="reps"></label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            id="reps"
          />

          <label for="weight"></label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
            min="0"
            max="1000"
          />

          <label for="unit"></label>
          <select
            onChange={(e) => setUnit(e.target.value)}
            value={unit}
            id="unit"
          >
            <option value="lbs">lbs</option>
            <option value="kgs">kgs</option>
            <option value="mile">mile</option>
          </select>

          <label for="date"></label>
          <input
            type="date"
            min="2010-01-01"
            max={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            id="date"
          />

          <div class="buttons">
            <label for="cancel">
              <button id="cancel" onClick={backHome}>
                Cancel
              </button>
            </label>

            <label for="submit">
              <button onClick={editExercise} id="submit">
                Submit
              </button>
            </label>
          </div>
        </form>
      </article>
    </>
  );
};
export default EditExercisePage;

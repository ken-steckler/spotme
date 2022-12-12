import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [date, setDate] = useState("");

  const history = useHistory();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch("/exercises", {
      method: "post",
      body: JSON.stringify(newExercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the Exercise!");
    } else {
      alert(`Failed to add exercise, status code = ${response.status}`);
    }
    history.push("/");
  };

  const backHome = () => {
    history.push("/");
  };

  return (
    <>
      <article>
        <h2>Adding a new exercise</h2>
        <p>Record your new exercise here</p>
        <form
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label for="name"></label>
          <input
            type="text"
            placeholder="Exercise Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />

          <label for="reps"></label>
          <input
            type="Number"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            id="reps"
          />

          <label for="weight"></label>
          <input
            type="number"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
            min="0"
            max="1000"
          />

          <label for="unit"></label>
          <select
            name="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            id="unit"
          >
            <option value="lbs">lbs</option>
            <option value="kgs">kgs</option>
            <option value="mile">mile</option>
          </select>

          <label for="date"></label>
          <input
            type="date"
            min="2019-01-01"
            placeholder="Date"
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
              <button type="submit" onClick={addExercise} id="submit">
                Submit
              </button>
            </label>
          </div>
        </form>
      </article>
    </>
  );
};

export default AddExercisePage;

import React from "react";
import Exercise from "./Exercise";

function ExerciseList({ exercises, onDelete, onEdit }) {
  return (
    <table id="exercises">
      <thead>
        <tr>
          <th id="left-col">Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Unit</th>
          <th>Date</th>
          <th id="del">Delete</th>
          <th id="edit">Edit</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise, i) => (
          <Exercise
            exercise={exercise}
            key={i}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ExerciseList;

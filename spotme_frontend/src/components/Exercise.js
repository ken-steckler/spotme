import React from "react";
import { MdCancel } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

function Exercise({ exercise, onEdit, onDelete }) {
  return (
    <tr>
      <td id="left-col">{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>
        {exercise.date.toLocaleString("en-US").slice(5, 8)}
        {exercise.date.toLocaleString("en-US").slice(8, 10)}-
        {exercise.date.toLocaleString("en-US").slice(0, 4)}
      </td>
      <td id="del">
        <MdCancel id="delete-btn" onClick={() => onDelete(exercise._id)} />
      </td>
      <td id="edit">
        <BiEdit id="edit-btn" onClick={() => onEdit(exercise)} />
      </td>
    </tr>
  );
}

export default Exercise;

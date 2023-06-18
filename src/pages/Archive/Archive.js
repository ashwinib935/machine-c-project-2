import React from "react";
import { useHabbit } from "../../context/HabbitProvider";
import "./Archive.css";
function Archive() {
  const { archiveList } = useHabbit();
  console.log("archiveList from archive", archiveList);

  return (
    <div>
      <h1>Archive List</h1>
      <div className="archive-container">
        {archiveList.length > 0 &&
          archiveList.map((habbit, index) => (
            <div className="single-habbit-container">
              <h2>{habbit.name}</h2>
              <p>{habbit.goal}</p>
              <p>{habbit.repeat}</p>
              <p>{habbit.timeOfDay}</p>
              <p>{habbit.startDate}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Archive;

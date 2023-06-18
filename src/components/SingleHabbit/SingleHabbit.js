import React from "react";
import "./SingleHabbit.css";
import { useHabbit } from "../../context/HabbitProvider";
function SingleHabbit({ habbit, index, setIsFormOpen, isFormOpen }) {
  const {
    habbits,
    setHabbits,
    newHabbit,
    setNewHabbit,
    archiveList,
    setArchiveList,
  } = useHabbit();
  const handleDeleteClick = (selectedIndex) => {
    setHabbits(habbits.filter((habbit, index) => index !== selectedIndex));
  };
  const handleEditClick = (selectedIndex) => {
    setIsFormOpen((isFormOpen) => !isFormOpen);
    setNewHabbit({ ...newHabbit });
  };
  const handleAddToArchive = (selectedIndex) => {
    const archiveHabbit = [...habbits].find(
      (habbit, index) => index === selectedIndex
    );
    console.log("archiveHabbit", archiveHabbit);
    setArchiveList([...archiveList, archiveHabbit]);
    const newList = [...habbits].filter(
      (habbit, index) => index !== selectedIndex
    );
    setHabbits(newList);
    console.log("Archive:", archiveList);
    console.log("habbits:", habbits);
  };

  return (
    <div className="single-habbit-container">
      <h2>{habbit.name}</h2>
      <div className="btn-action">
        <button onClick={() => handleEditClick(index)}>Edit</button>
        <button onClick={() => handleDeleteClick(index)}>Delete</button>
        <button onClick={() => handleAddToArchive(index)}>
          Add to Archive
        </button>
      </div>
    </div>
  );
}

export default SingleHabbit;

import React, { createContext, useContext, useState } from "react";

const AllHabbits = [
  {
    name: "Meditate",
    repeat: "Daily",
    goal: "1 time Daily",
    timeOfDay: "Any Time",
    startDate: "Today",
  },
  {
    name: "Read Books",
    repeat: "Monthly",
    goal: "2 times",
    timeOfDay: "Evening",
    startDate: "Tomorrow",
  },
  {
    name: "Traking",
    repeat: "Monthly",
    goal: "2 times",
    timeOfDay: "Morning",
    startDate: "Tomorrow",
  },
];
export const HabbitContext = createContext();
function HabbitProvider({ children }) {
  const [habbits, setHabbits] = useState(AllHabbits);
  const [archiveList, setArchiveList] = useState([]);
  const [newHabbit, setNewHabbit] = useState({
    name: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    startDate: "",
  });
  return (
    <HabbitContext.Provider
      value={{
        habbits,
        setHabbits,
        newHabbit,
        setNewHabbit,
        archiveList,
        setArchiveList,
      }}
    >
      {children}
    </HabbitContext.Provider>
  );
}

export default HabbitProvider;
export const useHabbit = () => useContext(HabbitContext);

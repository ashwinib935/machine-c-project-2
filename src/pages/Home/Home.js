import React, { useState } from "react";
import { useHabbit } from "../../context/HabbitProvider";
import SingleHabbit from "../../components/SingleHabbit/SingleHabbit";
import "./Home.css";
import NewHabbit from "../../components/NewHabbit/NewHabbit";
function Home() {
  const { habbits } = useHabbit();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleNewHabbitClick = () => {
    setIsFormOpen((isFormOpen) => !isFormOpen);
  };
  return (
    <div>
      <div className="container-add-btn">
        <button onClick={handleNewHabbitClick}>Add new Habbit</button>
        {isFormOpen && (
          <NewHabbit isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        )}
      </div>

      <div className="habbits-container">
        {habbits.length > 0 &&
          habbits.map((habbit, index) => (
            <SingleHabbit
              key={index}
              habbit={habbit}
              index={index}
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;

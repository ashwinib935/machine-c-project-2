import React, { useState } from "react";
import { useHabbit } from "../../context/HabbitProvider";
import "./NewHabbit.css";
function NewHabbit({ setIsFormOpen }) {
  const { habbits, setHabbits, newHabbit, setNewHabbit } = useHabbit();
  const { name, repeat, goal, timeOfDay, startDate } = newHabbit;

  const handleCancel = () => {
    setIsFormOpen(false);
  };
  const handleSave = (e) => {
    e.preventDefault();

    setNewHabbit({
      ...newHabbit,
    });
    setHabbits([...habbits, { name, repeat, goal, timeOfDay, startDate }]);
    console.log(newHabbit);
    console.log(habbits);
    setIsFormOpen((isFormOpen) => !isFormOpen);
  };

  return (
    <div>
      <div className="modal">
        <form className="newHabbit-Container">
          <label>
            Name
            <input
              className="text-input"
              placeholder="Name"
              value={name}
              onChange={(e) =>
                setNewHabbit({ ...newHabbit, name: e.target.value })
              }
            />
          </label>
          <label htmlFor="">Repeat</label>
          <select
            value={repeat}
            onChange={(e) =>
              setNewHabbit({ ...newHabbit, repeat: e.target.value })
            }
          >
            {/* <option value="none" selected disabled hidden>
              Select Option
            </option> */}
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>

          <label htmlFor="">Goal</label>
          <select
            value={goal}
            onChange={(e) =>
              setNewHabbit({ ...newHabbit, goal: e.target.value })
            }
          >
            {/* <option value="none" selected disabled hidden>
              Select Option
            </option> */}
            <option value="1 time Daily">1 time Daily</option>
            <option value="2 times">2 times</option>
          </select>

          <label htmlFor="">Time of day</label>
          <select
            value={timeOfDay}
            onChange={(e) =>
              setNewHabbit({ ...newHabbit, timeOfDay: e.target.value })
            }
          >
            {/* <option value="none" selected disabled hidden>
              Select Option
            </option> */}
            <option value="Any Time">Any Time</option>
            <option value="Evening">Evening</option>
            <option value="Morning">Morning</option>
          </select>

          <label htmlFor="">Start Date</label>
          <select
            value={startDate}
            onChange={(e) =>
              setNewHabbit({ ...newHabbit, startDate: e.target.value })
            }
          >
            {/* <option value="none" selected disabled hidden>
              Select Option
            </option> */}
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
          </select>

          <div className="newhabbit-btn-action">
            <button onClick={handleCancel}>Discard</button>
            <button onClick={handleSave}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewHabbit;

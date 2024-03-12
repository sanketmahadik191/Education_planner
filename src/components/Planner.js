import React, { useState } from "react";
import "./Planner.css";

const Planner = () => {
    const initialStore = [ 
        { subject: "Math", hours: 3 },
        { subject: "Science", hours: 5 }
    ];

    const [store, setStore] = useState(initialStore);
    const [todoName, setTodoName] = useState("");
    const [todoHours, setTodoHours] = useState("");

    const handleAddStore = () => {
        if (todoName && todoHours) {
            const newStoreItem = { subject: todoName, hours: parseInt(todoHours) };
            setStore([...store, newStoreItem]);
            setTodoName("");
            setTodoHours("");
        }
    };

    const addName = (event) => {
        setTodoName(event.target.value);
    };

    const addHour = (event) => {
        setTodoHours(event.target.value);
    };

    const handleSuccess = (index) => {
        const updatedStore = [...store];
        updatedStore[index].hours += 1;
        setStore(updatedStore);
    };

    const handleDanger = (index) => {
        const updatedStore = [...store];
        if (updatedStore[index].hours > 0) {
            updatedStore[index].hours -= 1;
            setStore(updatedStore);
        }
    };

    return (
        <div className="cont">
            <div className="input">
                <input
                    className="subject"
                    placeholder="Subject..."
                    onChange={addName}
                    value={todoName}
                />
                <input
                    className="hours"
                    placeholder="Hours.."
                    onChange={addHour}
                    value={todoHours}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddStore}
                >
                    Add
                </button>
            </div>
            <div className="data">
               {store.map((val, index) => (
                    <div className="display" key={index}>
                        <p>{val.subject}</p>
                        <p>{val.hours}</p>
                        <button className="btn btn-success" onClick={() => handleSuccess(index)}>+</button>
                        <button className="btn btn-danger" onClick={() => handleDanger(index)}>-</button>
                    </div>
               ))}
            </div>
        </div>
    );
};

export default Planner;

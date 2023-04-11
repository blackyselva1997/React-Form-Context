import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './index.css';

const array = [];
const Form = () => {
  const location = useLocation();
  const get = location.state;
  const [getItem, setGetItem] = useState(get);
  const [taskName, setTaskName] = useState(getItem ? getItem[0].name : "");
  const [taskDes, setTaskDes] = useState(getItem ? getItem[0].description : "");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [check, setCheck] = useState("");
  const Navigate = useNavigate();


  const handleInputChange = (e) => {
    localStorage.setItem("Data", JSON.stringify([]));
    if (e.target.name === "name") {
      setTaskName(e.target.value);
    } else {
      setTaskDes(e.target.value);
    }
  };
  const checkBox = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  const handleSubmit = () => {
    localStorage.clear();
    setIsFormSubmitted(true);
    if (taskName === "" || taskDes === "") return;
    let a = {
      name: taskName,
      description: taskDes,
      complete: check
    }
    if (getItem != null) {
      array[getItem[1]] = a;
    } else {
      array.push(a);
    }
    localStorage.setItem("Data", JSON.stringify(array));
    setTaskName("");
    setTaskDes("");
    setCheck("");
  };

  const Home = () => {
    Navigate("/home")
  }
  return (
    <div>
      <h1>Form</h1>
      <form className="form">
        <input name="name" value={taskName} placeholder="Name" onChange={handleInputChange} />
        {taskName === "" && isFormSubmitted && <p>Task name is required.</p>}
        <input name="des" value={taskDes} placeholder="Description" onChange={handleInputChange} />
        {taskDes === "" && isFormSubmitted && <p>Task name is required.</p>}
        <input type={"checkbox"} value={check} name="box" onChange={checkBox} />
      </form>
      <button className="formbtn" onClick={() => handleSubmit()}>Add Value</button>
      <button className="formbtn" onClick={Home}>Home</button>
    </div>
  );
};

export default Form;
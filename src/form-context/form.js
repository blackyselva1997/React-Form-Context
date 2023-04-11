import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';
import { stateContext } from "./context";

const array = [];
const Form = () => {
  const {state, dispatch} = useContext(stateContext);
  const [taskName, setTaskName] = useState(state.edit ? state.edit[0]?.name : "");
  const [taskDes, setTaskDes] = useState(state.edit ? state.edit[0]?.description : "");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [check, setCheck] = useState("");
  const Navigate = useNavigate();

  const handleInputChange = (e) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    let a = {
      name: taskName,
      description: taskDes,
      complete: check
    }
    console.log(array);
    if (state.edit?.length>0) {
      array[state.edit[1]] = a
      console.log("if");
      dispatch({type:"EDIT", payload: []})
      
    } else {
      array.push(a);
    }
    setTaskName("");
    setTaskDes("");
    setCheck("");
    setIsFormSubmitted(false);
  };
  const Home = () => {
    Navigate("/home")
  }
  return (
    <div>
      <h1>Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input name="name" value={taskName} placeholder="Name" onChange={handleInputChange} />
        {taskName === "" && isFormSubmitted && <p>Task name is required.</p>}
        <input name="des" value={taskDes} placeholder="Description" onChange={handleInputChange} />
        {taskDes === "" && isFormSubmitted && <p>Task name is required.</p>}
        <input type={"checkbox"} value={check} name="box" onChange={checkBox} />
        <button className="formbtn" onClick={() => dispatch({type:"FORMS", payload:array})}>Add Value</button>
      </form>
      <button className="formbtn" onClick={Home}>Home</button>
    </div>
  );
};

export default Form;
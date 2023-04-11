import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "./context";

const Home = () => {
  const Navigate = useNavigate();
  const {state:{form}, dispatch} = useContext(stateContext);
  console.log(form);

  const Delete = (index) => {
    let newtask = [...form];
    newtask.splice(index, 1);
    dispatch({
      type: "FORMS",
      payload : newtask
    });
  };
  const Form = () => {
    Navigate("/form");
  };
  const Login = () => {
    Navigate("/");
  };
  const edit = (value, index) => {
    Navigate("/form");
    dispatch({type: "EDIT", payload: [value, index]});
  }
  return (
    <>
      <button className="formbtn" onClick={Login}>
        Login
      </button>
      <button className="formbtn" onClick={Form}>
        Form
      </button>
      <div className="table">
      <table>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Description</th>
          <th>Complete</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {form.map((value, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>{value.description}</td>
              <td>{value.complete ? "true" : "false"}</td>
              <td>
                <button onClick={() => edit(value, index)}>edit</button>
              </td>
              <td>
                <button onClick={() => Delete(index)}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
      </div>
    </>
  );
};

export default Home;

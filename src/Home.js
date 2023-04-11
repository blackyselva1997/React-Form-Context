import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const item = JSON.parse(localStorage.getItem("Data"));
  const [items, setItems] = useState(item);
  const Navigate = useNavigate();

  const Delete = (index) => {
    let newtask = [...items];
    newtask.splice(index, 1);
    setItems(newtask);
    localStorage.setItem("Data", JSON.stringify(newtask));
  };
  const Form = () => {
    Navigate("/form");
  };
  const Login = () => {
    Navigate("/");
  };
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
        {items.map((value, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>{value.description}</td>
              <td>{value.complete ? "true" : "false"}</td>
              <td>
                <button><Link className="link" to="/form" state={[{name: value.name, description: value.description, complete: value.complete}, index]}>edit</Link></button>
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

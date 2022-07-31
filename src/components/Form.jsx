import React, { useState } from "react";
import Task from "./Task";
import "./style.css"

const Form = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (e) => {
    if(value=== ""){
        alert("Please Add a Task")
    }else{
    e.preventDefault();
    setList([...list, value]);
    setValue("");
    }
  };
  const deleteTask = (task) => {
    setList(list.filter(item=>item!==task));
  };

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input className="input" type="text" value={value} placeholder="Enter a task..." onChange={(e) => handleChange(e)} />
        <input className="input-btn" type="submit" value="Submit" />
      </form>
      {list.length ? <Task data={list} handleFilter={deleteTask} /> : null}
    </div>
  );
};

export default Form;

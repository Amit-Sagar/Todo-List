import React, { useState } from "react";
import Task from "./Task";

const Form = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, value]);
    setValue("");
  };
  const deleteTask = (task) => {
    setList(list.filter(item=>item!==task));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
        <input type="submit" value="Submit" />
      </form>
      {list.length ? <Task data={list} handleFilter={deleteTask} /> : null}
    </div>
  );
};

export default Form;

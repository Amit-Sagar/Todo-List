import React from "react";

const Task = (props) => {
  console.log(props.data);
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
            <button onClick={() => {props.handleFilter(item)}}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default Task;

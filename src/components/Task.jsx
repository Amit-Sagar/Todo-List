import React from "react";

const Task = (props) => {
  console.log(props.data);
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div key={index} className="task">
            <p className="count">Task{index+1}</p>
            <p className="task-list" style={{color:"white"}}>{item}</p>
            <button className="btn" onClick={() => {props.handleFilter(item)}}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default Task;

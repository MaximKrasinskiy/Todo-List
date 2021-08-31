import React from "react";
import TaskItem from "./TaskItem";

const buisness = [
  {
    id: 1,
    name: "Помыть машину.",
  },
  {
    id: 2,
    name: "Забрать деньги .",
  },
  {
    id: 3,
    name: "Убраться в квартире, до обеда.",
  },
  {
    id: 4,
    name: "Подготовить доклад о выполненой работе.",
  },
];

function TaskList() {
  return (
    <div className="container">
      <div>
        <h2>Список дел на сегодня:</h2>

        <div className="search">
          <input placeholder="введите задачу" type="text"></input>
          <button>add task</button>
          <button>delete task</button>
        </div>

        <div className="text">
          {buisness.map(function (item, index) {
            return <TaskItem task={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskList;

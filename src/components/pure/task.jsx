import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  const { title, description, completed, priority, created_at, updated_at } =
    task;

  function priotityColor(priority) {
    switch (priority) {
      case "low":
        return "bg-green-500";
      case "normal":
        return "bg-cyan-500";
      case "high":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <p className="text-slate-900 dark:text-white mt-2 text-xl">{title}</p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Descripción: {description}
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm ">
        Estado: {completed ? "COMPLETED" : "PENDING"}
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Prioridad:
        <span
          className={`${priotityColor(
            priority
          )} border-solid border-teal-400 text-slate-50 ml-6 px-4 py-0.5 rounded-xl`}
        >
          {priority.toUpperCase()}
        </span>
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Fecha de creación: {created_at.toLocaleString()}
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Feacha de actualización: {updated_at.toLocaleString()}
      </p>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;

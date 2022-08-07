import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  const { title, description, completed, priority, created_at, updated_at } =
    task;

  return (
    <div className="container w-3/12 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <p className="text-slate-900 dark:text-white mt-2 text-xl">{title}</p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Descripción: {description}
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm ">
        <span className="bg-emerald-600 border-solid border-teal-400">
          Estado: {completed ? "COMPLETED" : "PENDING"}
        </span>
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Prioridad: {priority.toUpperCase()}
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

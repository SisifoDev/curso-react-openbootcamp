import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/taskForm";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    1,
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL,
    new Date(),
    new Date()
  );
  const defaultTask2 = new Task(
    1,
    "Example2",
    "Default description 2",
    true,
    LEVELS.LOW,
    new Date(),
    new Date()
  );
  const defaultTask3 = new Task(
    1,
    "Example3",
    "Default description3",
    true,
    LEVELS.HIGH,
    new Date(),
    new Date()
  );
  const defaultTask4 = new Task(
    1,
    "Example4",
    "Default description3",
    true,
    LEVELS.MEDIUM,
    new Date(),
    new Date()
  );

  const tasks = [defaultTask, defaultTask2, defaultTask3, defaultTask4];
  console.log(tasks);
  const changeEstate = (id) => {};

  return (
    <div className="container">
      <div>
        <h1 className="text-slate-900 dark:text-white text-3xl text-center py-8">
          Your Tasks
        </h1>
        <TaskForm />
      </div>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {tasks.map((task) => (
          <TaskComponent task={task} changeEstate={changeEstate} />
        ))}
      </div>
    </div>
  );
};

export default TaskListComponent;

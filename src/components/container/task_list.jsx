import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
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

  const tasks = [defaultTask, defaultTask2, defaultTask3];
  console.log(tasks);
  const changeEstate = (id) => {};

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-slate-900 dark:text-white text-3xl text-center">
          Your Task
        </h1>
      </div>
      <div className="flex flex-row">
        {tasks.map((task) => (
          <TaskComponent task={task} changeEstate={changeEstate} />
        ))}
      </div>
    </div>
  );
};

export default TaskListComponent;

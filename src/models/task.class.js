import { LEVELS } from "./levels.enum";

export class Task {
  id;
  title = "";
  description = "";
  completed = false;
  priority = LEVELS.NORMAL;
  created_at = new Date();
  updated_at = new Date();
  constructor(
    id,
    title,
    description,
    completed,
    priority,
    created_at,
    updated_at
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.priority = priority;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

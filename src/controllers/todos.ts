/* import { Request, Response, NextFunction } from "express";

export const createToDo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
 */

import { RequestHandler } from "express";
import { Todo } from "../models/todo";

export const createTodo: RequestHandler = (req, res, next) => {
  const TODOS: Todo[] = [];
  const text = (req.body as { text: string }).text;

  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
};

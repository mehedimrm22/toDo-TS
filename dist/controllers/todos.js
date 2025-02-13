"use strict";
/* import { Request, Response, NextFunction } from "express";

export const createToDo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const createTodo = (req, res, next) => {
    const TODOS = [];
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
};
exports.createTodo = createTodo;

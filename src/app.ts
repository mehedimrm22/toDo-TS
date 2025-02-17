import express, { Request, Response, NextFunction } from "express";
import toDoRoutes from "./routes/todo";
import { json } from "body-parser";

const app = express();
app.use(json());

app.listen(3001);
app.use("/todos", toDoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ messae: err.message });
});

import express, { Request, Response, NextFunction } from "express";
import toDoRoutes from "./routes/todo";

const app = express();
app.listen(3001);
app.use("/todos", toDoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ messae: err.message });
});

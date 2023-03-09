import express, { Request, Response } from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv").config();
const app = express();
const port = 8000;
app.use(express.json());
//home
app.get("/home", (req: Request, res: Response) => {
  res.status(200).send("hey welcome to home page");
});
//=================================================
//Connect database
const AppDataSource = new DataSource({
  type: "mssql",
  database: "typeorm",
  host: "localhost",
  driver: "msnodesqlv8",
  port: 1433,
  username: "admin",
  password: "admin",
  
});
AppDataSource.initialize()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error connecting database" + err);
  });
//listen port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.....`);
});

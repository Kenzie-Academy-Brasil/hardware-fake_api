import cors from "cors";
import express, { Application, static as _static } from "express";
import swaggerUi from "swagger-ui-express";
import hardwareRouter from "./hardware.router";
import swaggerDocument from "./swagger.json";

const app: Application = express();
app.use(_static("statics"));
app.use(cors());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", hardwareRouter);

export default app;

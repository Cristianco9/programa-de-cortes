import express from "express";
import path from "path";
import morgan from "morgan";

import userRoutes from "./routes/user.routes.js";
import { fileURLToPath } from "url";

// create the app with express
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// select routes
app.use(userRoutes);

// static files path
app.use(express.static(path.join(__dirname, "public")));

// starting the server
export default app;
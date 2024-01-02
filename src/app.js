import express from 'express';
import path from "path";
import morgan from "morgan";

import userRoutes from "./routes/userRoutes.js";
import { fileURLToPath } from "url";
// import { Session } from 'inspector';

// create the app with express
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({path:'../env/.env'});


const __dirname = path.dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// select routes
app.use(userRoutes);

// static files path
app.use(express.static(path.join(__dirname, "public")));

// starting the app
export default app;
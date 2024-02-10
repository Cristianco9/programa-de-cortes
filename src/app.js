import express from 'express';
import path from 'path';
import morgan from 'morgan';
import { testConnection } from './DBConnection.js';
import routerApi from './routes/indexRouter.js';
import { fileURLToPath } from 'url';
import {logError, errorHandler, boomErrorHandler } from "./middlewares/errorHandler.js"

// Create the app with express
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files path
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Test Data base connection
testConnection();

// Select routes
routerApi(app);

// Error middlewares
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

// Starting the app
export default app;

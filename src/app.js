import express from 'express';
import path from 'path';
import morgan from 'morgan';
import { testConnection } from './libraries/DBConnection.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routerApi from './routes/indexRouter.js';
//import { useGraphql } from "./graphql/index.js";
import { fileURLToPath } from 'url';
import {
  logError,
  errorHandler,
  boomErrorHandler,
  ORMErrorHandler
} from "./middlewares/errorHandler.js"

// Create the app with express
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

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

// Select the Graphql server
//await useGraphql(app);

// CORS
const whiteList = ['http://127.0.0.1:3000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed'));
    }
  }
}
app.use(cors());

const passport = import('./utils/auth/indexAuth.js');

// Error middlewares
app.use(logError);
app.use(ORMErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Starting the app
export default app;

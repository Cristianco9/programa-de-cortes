import express from 'express';
import path from 'path';
import morgan from 'morgan';
import { testConnection } from './DBConnection.js';
import indexRouter from './routes/indexRouter.js';
import { fileURLToPath } from 'url';
// import { Session } from 'inspector';

// create the app with express
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static files path
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Test Data base connection
testConnection();

// select routes
app.use(indexRouter);

// starting the app
export default app;

import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bcrypt from 'bcryptjs';
import session from 'express-sessions';
import { testConnection } from './DBConnection.js';
import userRoutes from './routes/userRoutes.js';
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

/*
app.use(session({
    key:'cookieUser',
    secret: 'secret',
    store: sessionStorage,
    resave: false,
    saveUninitialized: false
})); */

// Test Data base connection
testConnection();

// select routes
app.use(userRoutes);

// starting the app
export default app;
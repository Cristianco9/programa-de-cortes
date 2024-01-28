import app from './app.js';
import { port } from './config.js';

app.listen(port, (req, res) => {
    console.log(`server on port ${port}`);
});
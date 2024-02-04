import app from './app.js';
import { theIPAddress, port } from './config.js';

app.listen(port, theIPAddress, (req, res) => {
    console.log(`server on port https://${theIPAddress}:${port}`);
});

import app from './app.js';
import { theIPAddress, port } from './netConfig.js';

app.listen(port, theIPAddress, (req, res) => {
    console.log(`server on port https://${theIPAddress}:${port}`);
});

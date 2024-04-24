import app from './app.js';
import { theIPAddress, port } from './libraries/netConfig.js';

(async () => {
  const createApp = await app.listen(port, theIPAddress, (req, res) => {
    console.log(`server on port https://${theIPAddress}:${port}`);
  });
})();

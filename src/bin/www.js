import app  from '../app.js';
import config  from '../../config.js';

const PORT = config.api.port

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);
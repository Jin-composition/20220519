const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.port || 8000;
const ip = 'localhost';
const index = require('./Router/index')

const corsOptions = {
	origin: 'http://localhost:8000',
	credentials: true,
};


// app.use(express.json({strict : false}))
 app.use(cors(corsOptions))

app.use('/api', index)


app.listen(PORT, ip, () => {
  console.log(`🚀  http server listen on ${ip}:${PORT}  🚀`);
});
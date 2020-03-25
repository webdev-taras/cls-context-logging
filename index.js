var http = require('http')
const app = require('./src/app')

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => console.log(`Express server listening on port ${port}`))

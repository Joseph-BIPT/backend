const morgan = require('morgan');

// eslint-disable-next-line no-unused-vars
morgan.token('body', (req, res) => {
  if(req.method === 'POST'){
    return JSON.stringify(req.body)
  }else{
    return ' '
  }
})
const requestLogger = morgan(':method :url :status :res[content-length] - :response-time ms :body')


module.exports = requestLogger;
const createError = require('http-errors');
const express = require('express');
const debug = require('debug')('quiz-prof:server');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const Quiz = require('./models/quiz');

const app = express();
mongoose.connect('mongodb://localhost:27017/quizDB', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function() {
      console.log('Connected to MongoDB');
    })
    .catch(function (error) {
      console.log(`Error connecting to MongoDB: ${error}`);
    });

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/quizzes', async function(req, res) {
  const quizzes = await Quiz.find().lean();
  res.json(quizzes);
});

app.get('/quiz/:id', async function(req, res) {
  const quiz = await Quiz.find({ _id: req.params.id }).lean();
  res.json(quiz);
});

app.post('/quizzes', upload.single('uploaded_file'), function(req, res) {
  const data = req.file.buffer.toString('utf8');
  const jsonData = JSON.parse(data);
  const quizzes = jsonData.quizzes;
  console.log(`quizzes: ${JSON.stringify(quizzes, null, 2)}`);

  Quiz.insertMany(quizzes)
      .then(function() {
          console.log('Successfully inserted quizzes');
          /*
          res.status(200).json( {
              message: 'Successfully inserted quizzes'
          });
          */
          res.status(200).json({ message: `Successfully inserted quizzes` });
      })
      .catch(function(error) {
        console.log('Error inserting quizzes:' + error);
        res.status(400).send(`Failed to insert quizzes: ${JSON.stringify(error, null, 2)}`);
      });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(`Error: ${JSON.stringify(err, null, 2)}`);
  res.status(err.status || 500).send(`Error: ${JSON.stringify(err, null, 2)}`);
});

const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const passport = require("passport")
// const passportLocal = require("passport-local").Strategy;
// const cookieParser = require("cookie-parser")
// const session = require("express-session")


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// app.use(session({
//   secret: "secreto",
//   resave: true,
//   saveUninitialized: true
// }));
// app.use(cookieParser("secreto"))
// app.use(passport.initialize());
// app.use(passport.session());
// require("./passportConfig")(passport);

const uri = process.env.DB_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDb database connection successfull');
})

const puntoRouter = require('./routes/punto.routes.js');
const desperdicioRouter = require('./routes/desperdicio.routes.js');
const reporteRouter = require('./routes/reporte.routes.js');
const estadisticaRouter = require('./routes/estadistica.routes.js');

app.use('/puntos', puntoRouter);
app.use('/desperdicios', desperdicioRouter);
app.use('/reportes', reporteRouter);
app.use('/estadisticas', estadisticaRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

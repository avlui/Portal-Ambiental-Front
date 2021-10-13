require("dotenv").config()//Leyendo variabes de entorno
// require("./mongo")//Importando y estableciendo la conexión a MongoDB

const express = require("express");
const cors = require("cors");

const morgan = require("morgan");
const mongoose = require("mongoose");


const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Remote DB
const connectionString ="mongodb+srv://giloc:Bateria98.@cluster0.maqwh.mongodb.net/portal_ambiental?retryWrites=true&w=majority";

//local Yarce DB
const uri = "mongodb://localhost/wea";
mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb database connection successfull :D lel");
});

const puntoRouter = require("./routes/punto.routes.js");
const desperdicioRouter = require("./routes/desperdicio.routes.js");
const reporteRouter = require("./routes/reporte.routes.js");
const estadisticaRouter = require("./routes/estadistica.routes.js");

app.use("/puntos", puntoRouter);
app.use("/desperdicios", desperdicioRouter);
app.use("/reportes", reporteRouter);
app.use("/estadisticas", estadisticaRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("App running");
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

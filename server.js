const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const e =
  "mongodb+srv://giloc:Bateria98.@cluster0.maqwh.mongodb.net/portal_ambiental?retryWrites=true&w=majority";
const g =
  "mongodb+srv://Juan:123@cluster0.7cb8r.mongodb.net/test?retryWrites=true&w=majority";
const uri = "mongodb://localhost/wea";
mongoose.connect(e);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb database connection successfull :D lel");
});

const puntoRouter = require("./routes/punto.routes.js");
const desperdicioRouter = require("./routes/desperdicio.routes.js");
/*const reporteRouter = require("./routes/reporte.routes.js");
const estadisticaRouter = require("./routes/estadistica.routes.js");
const usuarioRouter = require("./routes/usuario.routes.js"); */

app.use("/puntos", puntoRouter);
app.use("/desperdicios", desperdicioRouter);
/*app.use("/reportes", reporteRouter);
app.use("/estadisticas", estadisticaRouter);
app.use("/usuario", usuarioRouter); */

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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

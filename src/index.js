const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
//Dung de su dung cac method khac ngoai GET, POST
var methodOverride = require('method-override')

// Dung su dung Jquery
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const port = 5500;
const route = require("./routes");
const db = require("./config/db");
const SortMiddleware = require("./app/middlewares/SortMiddleware");

//Connect DB

db.connect();

//Use image
app.use(express.static(path.join(__dirname, "public")));

//(bparser)/create body like query
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//Http logger
// app.use(morgan("combined"));


//Middlewares
app.use(SortMiddleware)

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: require("./helpers/handlebars")
  })
);
app.set("view engine", "hbs");
// Ben MacOS thi dau /
// Ben Windows thi dau \\
// Thay the bang dau doi so ', ' se tu dong dien dau vao phu hop voi he dieu hanh
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);

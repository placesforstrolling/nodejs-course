const express = require("express");
const bodyParser = require("body-parser");
// routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// init express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes);
app.use(adminRoutes);

app.listen(4000);

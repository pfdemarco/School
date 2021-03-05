const express = require('express');
const htmlRoute = require("./routes/htmlRoutes");
const apiRoute = require("./routes/apiRoutes");

//using express
const app = express();
const PORT = process.env.PORT || 3000;//this is important if you use just 3000 it may not work sometimes
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Allows the use of static files within the public folder
app.use(express.static('public'))
// the routes
app.use("/api", apiRoute);
app.use("/", htmlRoute);

// Starts the server 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

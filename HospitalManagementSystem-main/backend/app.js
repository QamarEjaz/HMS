const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
// const routes = require("./routes/route");
const mailRoute = require("./routes/mailRoute");
const scheduleRoute = require("./routes/scheduleRoute");
const contactRoute = require("./routes/contactusRoute");
const kickoffmodalRoute = require("./routes/kickoffmodalRoute");
const servicemodalRoute = require("./routes/servicemodalRoute");
const checkoutmodalRoute = require("./routes/checkoutmodalRoute");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.json({extended: false}));
connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running at port", process.env.PORT);
});

// app.use(routes);
app.use("/api", mailRoute);
app.use("/api", scheduleRoute);
app.use("/api", contactRoute);
app.use("/api", kickoffmodalRoute);
app.use("/api", servicemodalRoute);
app.use("/api", checkoutmodalRoute);
app.use("/api", userRoute);
app.use("/api", blogRoute);
module.exports = app;

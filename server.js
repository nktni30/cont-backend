const express = require("express");
const dotenv = require("dotenv");
// const morgan = require("morgan");
const connectDB = require("./config/database.js");
const categoryRoutes = require("./routers/categoryRoutes.js");
const productRoutes = require('./routers/productRoutes.js')
const brandRoutes = require('./routers/brandRoutes.js')
const subcategoryRoutes = require('./routers/subcategoryRoutes.js')

const cors = require("cors");

//configure env
dotenv.config({ path: "./config/config.env" });
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json());

// app.use(morgan("dev"));
app.use(cors( {
  origin: ['https://conterials-frontend.onrender.com', 'https://www.conterials.com', 'http://localhost:3000'],
  methods:["GET", "PUT", "POST"],
  credentials: true,
}
));



//routes
// app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/brand", brandRoutes);
app.use("/api/v1/subcategory", subcategoryRoutes);

//rest api
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

//PORT
const PORT = process.env.PORT;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port http://localhost:${PORT}`
  );
});

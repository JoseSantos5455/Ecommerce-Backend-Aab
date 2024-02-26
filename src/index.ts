import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route";
import morgan from "morgan";
import productsRoute from "./routes/products.route";

//For env File
dotenv.config();

const app = express();
const port = process.env.PORT || 3040;

// setup middelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

// setup routes
app.use("/auth", authRoute);
app.use("/products", productsRoute);

app.get("*", (req, res) => {
  res.status(404).send("Endpoint notfound 404 !");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

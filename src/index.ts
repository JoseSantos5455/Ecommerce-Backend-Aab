import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route";
import morgan from "morgan";
import productRoute from "./routes/product.route";
import categoryRoute from "./routes/category.route";
import uploadRoute from "./routes/upload.route";
import cartRoute from "./routes/cart.route";
import orderRoute from "./routes/order.route";
import setupSwaggerRoute from "./lib/swagger";

//For env File
dotenv.config();

const app = express();
const port = process.env.PORT || 3040;

// swtup swagger
app.use(setupSwaggerRoute)

// setup routes without bodyParser
app.use("/upload", uploadRoute);

// setup middelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

// setup routes
app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/categories", categoryRoute);
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);


app.get("*", (req, res) => {
  res.status(404).send("Endpoint notfound 404 !");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
// import vendorModel from "./models/vendor.model.js";
dotenv.config();

connectDB();

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Server is on ${PORT}`);
})
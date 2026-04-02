import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import vendorModel from "./models/vendor.model.js";
dotenv.config();
setInterval(async () => {
  await vendorModel.deleteMany({
    isTemporary: true,
    createdAt: { $lt: new Date(Date.now() - 30 * 60 * 1000) },
  });

  console.log("🧹 Cleaned temporary vendors");
}, 10 * 60 * 1000);
connectDB();

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Server is on ${PORT}`);
})
import app from "./app.js";
import connectDB from "./config/db.js";
import { configDotenv } from "dotenv";
configDotenv();

setInterval(async () => {
  await Vendor.deleteMany({
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